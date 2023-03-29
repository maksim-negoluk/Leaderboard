import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootDispatch, RootState } from '../../../store/store';
import { ToggleModal } from '../../../store/configurationSlice';
import {
   StyledModalWindow,
   CloseButton,
} from '../AddUserModal/style'

import {
   ProfileBackground,
   ProfileImage,
   ProfileContent,
   ProfileTextBlock,
   UserNickname,
   UserScore,
} from './style'
import { IUser } from '../../../types/userTypes';

const UserProfile = () => {
   const [name, setName] = useState('');
   const [score, setScore] = useState(0);
   const ModalConfiguration = useSelector(
      (state: RootState) => state.configuration.modalConfiguration
   );
   const CurrentUser: IUser = useSelector(
      (state: RootState) =>
         state.leaderboard.currentUserList.filter(
            (user) => user.id === ModalConfiguration.currentUserId
         )[0]
   );

   const dispatch = useDispatch<RootDispatch>();

   useEffect(() => {
      if (ModalConfiguration.showProfile) {
         setName(CurrentUser.name);
         setScore(CurrentUser.score);
      }
   }, [ModalConfiguration.showProfile]);

   const closeProfile = () => {
      dispatch(ToggleModal({ modalConfiguration: { showModal: false, showProfile: false, currentUserId: '' } }));
   };

   return (
      <ProfileBackground showProfile={ModalConfiguration.showProfile}>
         <StyledModalWindow>
            <ProfileContent>
               <ProfileImage></ProfileImage>
               <ProfileTextBlock>
                  <UserNickname>{name}</UserNickname>
                  <UserScore>score: {score}</UserScore>
               </ProfileTextBlock>
            </ProfileContent>
            <CloseButton onClick={closeProfile}>X</CloseButton>
         </StyledModalWindow>
      </ProfileBackground>
   );
};

export default UserProfile;