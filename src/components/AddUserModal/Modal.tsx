import { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { RootDispatch, RootState } from '../../store/store';
import { ToggleModal } from '../../store/configurationSlice';
import { EditUser, fetchUserNickname, UpdateHistory } from '../../store/leaderboardSlice';
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
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const ModalConfiguration = useSelector(
    (state: RootState) => state.configuration.modalConfiguration
  );

  const dispatch = useDispatch<RootDispatch>();

  const closeModal = () => {
    dispatch(ToggleModal({ modalConfiguration: { showModal: false, currentUserId: '' } }));
  };

  const handleNicknameChange = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleScoreChange = (event: FormEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) < 0) event.currentTarget.value = '0';
    setScore(Number(event.currentTarget.value));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ModalConfiguration.currentUserId) {
      await dispatch(EditUser({ name, score, id: ModalConfiguration.currentUserId }));
    } else {
      await dispatch(fetchUserNickname({ id: nanoid(), score, name }));
    }
    dispatch(UpdateHistory());
    setName('');
    setScore(0);
  };

  return (
    <ModalBackground showModal={ModalConfiguration.showModal}>
      <StyledModalWindow>
        <CloseButton name="close" type="button" onClick={closeModal}>
          x
        </CloseButton>
        <ModalTitle>{ModalConfiguration.currentUserId ? 'Edit user' : 'Add new user'}</ModalTitle>
        <AddUserForm method="GET" onSubmit={handleFormSubmit}>
          <AddUserInput
            type="text"
            placeholder="nickname"
            value={name}
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
