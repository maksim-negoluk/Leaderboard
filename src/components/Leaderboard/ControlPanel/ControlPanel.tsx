import { useDispatch } from 'react-redux';
import {
  StyledControlPanel,
  Title,
  ButtonsBlock,
  HistoryNavigationButton,
  NewDayButton,
  AddUserButton
} from './style';
import { ToggleModal } from '../../../store/configurationSlice';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ToggleModal({ modalConfiguration: { showModal: true } }));
  };
  return (
    <StyledControlPanel>
      <Title>Leaders table for this period</Title>
      <ButtonsBlock>
        <HistoryNavigationButton value="back" type="button">
          {'<<'}
        </HistoryNavigationButton>
        <HistoryNavigationButton value="forward" type="button">
          {'>>'}
        </HistoryNavigationButton>
        <NewDayButton value="new day" type="button">
          new day
        </NewDayButton>
        <AddUserButton value="new user" type="button" onClick={openModal}>
          + add new user
        </AddUserButton>
      </ButtonsBlock>
    </StyledControlPanel>
  );
};

export default ControlPanel;
