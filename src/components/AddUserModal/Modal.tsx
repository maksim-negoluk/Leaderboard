import { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { ToggleModal } from '../../store/configurationSlice';
import { AddUser, EditUser } from '../../store/leaderboardSlice';
import {
  ModalBackground,
  StyledModalWindow,
  CloseButton,
  ModalTitle,
  AddUserForm,
  AddUserInput,
  AddUserButton
} from './style';

const Modal = () => {
  const [nickname, setNickname] = useState('');
  const [score, setScore] = useState(0);
  const ModalConfiguration = useSelector(
    (state: RootState) => state.configuration.modalConfiguration
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(
      ToggleModal({ modalConfiguration: { modalText: '', showModal: false, currentUserId: '' } })
    );
  };

  const handleNicknameChange = (event: FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };

  const handleScoreChange = (event: FormEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) < 0) event.currentTarget.value = '0';
    setScore(Number(event.currentTarget.value));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ModalConfiguration.currentUserId) {
      dispatch(EditUser({ nickname, score, id: ModalConfiguration.currentUserId }));
    } else dispatch(AddUser({ nickname, score, id: nanoid() }));
    setNickname('');
    setScore(0);
  };

  return (
    <ModalBackground showModal={ModalConfiguration.showModal}>
      <StyledModalWindow>
        <CloseButton name="close" type="button" onClick={closeModal}>
          x
        </CloseButton>
        <ModalTitle>{ModalConfiguration.modalText}</ModalTitle>
        <AddUserForm method="GET" onSubmit={handleFormSubmit}>
          <AddUserInput
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <AddUserInput
            type="number"
            placeholder="score"
            value={score}
            onChange={handleScoreChange}
          />
          <AddUserButton type="submit" onClick={closeModal}>
            Save
          </AddUserButton>
        </AddUserForm>
      </StyledModalWindow>
    </ModalBackground>
  );
};

export default Modal;