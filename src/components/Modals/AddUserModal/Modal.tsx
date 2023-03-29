import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { RootDispatch, RootState } from '../../../store/store';
import { ToggleModal } from '../../../store/configurationSlice';
import { EditUser, fetchUserNickname, UpdateHistory } from '../../../store/leaderboardSlice';
import {
  ModalBackground,
  StyledModalWindow,
  CloseButton,
  ModalTitle,
  AddUserForm,
  AddUserInput,
  ErrorMessage,
  AddUserButton
} from './style';
import { IUser } from '../../../types/userTypes';
import { randomAvatar } from '../../Leaderboard/UserList/UserIconsStyles';

const Modal = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [IsFormValid, setIsFormValid] = useState(true);
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

  const isEditMode = ModalConfiguration.currentUserId;

  useEffect(() => {
    if (isEditMode) {
      setName(CurrentUser.name);
      setScore(CurrentUser.score);
      setIsFormValid(true);
    } else {
      setName(' ');
      setScore(0);
      setIsFormValid(false);
    }
  }, [ModalConfiguration.showModal]);

  const closeModal = () => {
    dispatch(ToggleModal({ modalConfiguration: { showModal: false, showProfile: false, currentUserId: '' } }));
  };

  const handleNicknameChange = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value !== '') setIsFormValid(true);
    else setIsFormValid(false);
    setName(event.currentTarget.value);
  };

  const handleScoreChange = (event: FormEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) < 0) {
      event.currentTarget.value = '0';
    }
    setScore(Number(event.currentTarget.value));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (IsFormValid) {
      if (ModalConfiguration.currentUserId) {
        await dispatch(EditUser({ name, score, id: ModalConfiguration.currentUserId }));
      } else {
        await dispatch(fetchUserNickname({ id: nanoid(), score, name, avatar: randomAvatar() }));
      }
      closeModal();
      dispatch(UpdateHistory());
      setName('');
      setScore(0);
    }
  };

  return (
    <ModalBackground showModal={ModalConfiguration.showModal}>
      <StyledModalWindow>
        <CloseButton name="close" type="button" onClick={closeModal}>
          x
        </CloseButton>
        <ModalTitle>{isEditMode ? 'Edit user' : 'Add new user'}</ModalTitle>
        <AddUserForm method="GET" onSubmit={handleFormSubmit}>
          <AddUserInput
            type="text"
            placeholder="nickname"
            value={name}
            onChange={handleNicknameChange}
          />
          <ErrorMessage IsFormValid={IsFormValid}> Input can not be empty </ErrorMessage>
          <AddUserInput
            type="number"
            placeholder="score"
            value={score}
            onChange={handleScoreChange}
          />
          <AddUserButton type="submit">Save</AddUserButton>
        </AddUserForm>
      </StyledModalWindow>
    </ModalBackground>
  );
};

export default Modal;
