import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleModal } from '../../../store/configurationSlice';
import IUserProps from './types';
import {
  UserBlock,
  Place,
  ProfilePicture,
  Score,
  NickName,
  Arrow,
  ScoreChange,
  EditButton,
  DeleteButton
} from './style';
import { DeleteUser, UpdateHistory } from '../../../store/leaderboardSlice';

const pencil = require('../../../static/pencil.png');
const trashcan = require('../../../static/delete.png');

const User: FC<IUserProps> = ({ place, avatar, score, nickname, userId, positionShift }) => {
  const [positionChange, setPositionChange] = useState('new');
  const shift = Number(positionShift);
  const dispatch = useDispatch();
  const openModal = (id: string) => {
    dispatch(
      ToggleModal({
        modalConfiguration: { showModal: true, showProfile: false, currentUserId: id }
      })
    );
  };

  const openProfile = (id: string) => {
    dispatch(
      ToggleModal({
        modalConfiguration: { showModal: false, showProfile: true, currentUserId: id }
      })
    );
  };

  const deleteUser = () => {
    dispatch(DeleteUser(userId))
    dispatch(UpdateHistory())
  }

  useEffect(() => {
    if (Number.isNaN(shift)) setPositionChange('new');
    if (shift === 0) setPositionChange('same');
    if (shift < 0) setPositionChange('descending');
    if (shift > 0) setPositionChange('ascending');
  }, [positionShift]);

  return (
    <UserBlock>
      <Place>{place}</Place>
      <ProfilePicture src={avatar} />
      <Score>{score}</Score>
      <NickName onClick={() => openProfile(userId)} >{nickname}</NickName>
      <div />
      <ScoreChange positionShift={positionChange}>
        <Arrow positionShift={positionChange} />
        {Number.isNaN(shift) ? 'new user' : `${Math.abs(shift)} places`}
      </ScoreChange>
      <DeleteButton src={trashcan} onClick={() => deleteUser()} />
      <EditButton src={pencil} onClick={() => openModal(userId)} />
    </UserBlock>
  );
};

export default User;
