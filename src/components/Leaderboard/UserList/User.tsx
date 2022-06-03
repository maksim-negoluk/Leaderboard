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
  EditButton
} from './style';

const pencil = require('../../../static/pencil.png');

const User: FC<IUserProps> = ({ place, score, nickname, userId, positionShift }) => {
  const [positionChange, setPositionChange] = useState('new');
  const shift = Number(positionShift);
  const dispatch = useDispatch();
  const openModal = (id: string) => {
    dispatch(
      ToggleModal({
        modalConfiguration: { showModal: true, currentUserId: id }
      })
    );
  };

  useEffect(() => {
    if (Number.isNaN(shift)) setPositionChange('new');
    if (shift === 0) setPositionChange('same');
    if (shift < 0) setPositionChange('descending');
    if (shift > 0) setPositionChange('ascending');
  }, [positionShift]);

  return (
    <UserBlock>
      <Place>{place}</Place>
      <ProfilePicture />
      <Score>{score}</Score>
      <NickName>{nickname}</NickName>
      <div />
      <ScoreChange positionShift={positionChange}>
        <Arrow positionShift={positionChange} />
        {Number.isNaN(shift) ? 'new user' : `${Math.abs(shift)} places`}
      </ScoreChange>
      <EditButton src={pencil} onClick={() => openModal(userId)} />
    </UserBlock>
  );
};

export default User;
