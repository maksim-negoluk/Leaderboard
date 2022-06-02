import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleModal } from '../../../store/configurationSlice';
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
import IUserProps from './types';

const pencil = require('../../../static/pencil.png');

const User: FC<IUserProps> = ({ place, score, nickname, userId }) => {
  const dispatch = useDispatch();
  const openModal = (id: string) => {
    dispatch(
      ToggleModal({
        modalConfiguration: { modalText: 'Edit user', showModal: true, currentUserId: id }
      })
    );
  };
  return (
    <UserBlock>
      <Place>{place}</Place>
      <ProfilePicture />
      <Score>{score}</Score>
      <NickName>{nickname}</NickName>
      <div />
      <ScoreChange>
        <Arrow /> 6 places
      </ScoreChange>
      <EditButton src={pencil} onClick={() => openModal(userId)} />
    </UserBlock>
  );
};

export default User;
