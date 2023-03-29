import styled from 'styled-components';

const blackColor = '#171616';
const backgroundColor = '#e3e3e3';

const ModalBackground = styled.div<{
  showModal: boolean;
}>`
  position: absolute;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  height: 100vh;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.5);
`;

const StyledModalWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  border: ${blackColor} solid 2px;
  border-radius: 10px;
  width: clamp(250px, 60%, 600px);
  background-color: ${backgroundColor};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: ${blackColor};
  font-weight: bold;
`;

const ModalTitle = styled.h2`
  padding: 30px 0 20px 0;
  margin: 0 auto;
`;

const AddUserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 50px 0;
  & * {
    border: ${blackColor} solid 2px;
    box-shadow: 3px 3px ${blackColor};
    color: ${blackColor};
    font-weight: bold;
  }
`;

const AddUserInput = styled.input`
  padding: 2px 5px;
  margin: 0 0 10px 0;
`;

const ErrorMessage = styled.div<{ IsFormValid: boolean }>`
  ${({ IsFormValid }) => (IsFormValid ? 'display: none;' : 'display: block;')}
  border: none;
  box-shadow: none;
  color: #e72d2d;
  font-size: 0.9rem;
  font-weight: normal;
`;

const AddUserButton = styled.button`
  padding: 5px 20px;
  background-color: ${backgroundColor};
`;

export {
  StyledModalWindow,
  ModalBackground,
  CloseButton,
  ModalTitle,
  AddUserForm,
  AddUserInput,
  ErrorMessage,
  AddUserButton
};
