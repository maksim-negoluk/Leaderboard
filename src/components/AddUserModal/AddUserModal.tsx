import {
  StyledModalWindow,
  CloseButton,
  ModalTitle,
  AddUserForm,
  AddUserInput,
  AddUserButton
} from './style';

const AddUserModal = () => (
  <StyledModalWindow>
    <CloseButton name="close" type="button">
      x
    </CloseButton>
    <ModalTitle>Edit user score</ModalTitle>
    <AddUserForm method="GET">
      <AddUserInput type="text" placeholder="nickname" />
      <AddUserInput type="number" placeholder="score" />
      <AddUserButton type="submit"> Save </AddUserButton>
    </AddUserForm>
  </StyledModalWindow>
);

export default AddUserModal;
