import { useDispatch, useSelector } from 'react-redux';
import { ToggleModal } from '../../../store/configurationSlice';
import { RootState } from '../../../store/store';
import {
  NavigateBackwardInHistory,
  NavigateForwardInHistory
} from '../../../store/leaderboardSlice';
import {
  StyledControlPanel,
  Title,
  ButtonsBlock,
  HistoryNavigationButton,
  NewDayButton,
  AddUserButton
} from './style';

const ControlPanel = () => {
  const historyState = useSelector((state: RootState) => state.leaderboard);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ToggleModal({ modalConfiguration: { showModal: true } }));
  };

  const isFirst = historyState.currentHistoryIndex === 0;
  const isLast = historyState.currentHistoryIndex === historyState.userHistory.length - 1;

  const handlePreviousButtonClick = () => {
    dispatch(NavigateBackwardInHistory());
  };

  const handleNextButtonClick = () => {
    dispatch(NavigateForwardInHistory());
  };
  return (
    <StyledControlPanel>
      <Title>Leaders table for this period</Title>
      <ButtonsBlock>
        {isLast ? (
          <HistoryNavigationButton value="forward" type="button" inactive>
            {'<<'}
          </HistoryNavigationButton>
        ) : (
          <HistoryNavigationButton value="forward" type="button" onClick={handleNextButtonClick}>
            {'<<'}
          </HistoryNavigationButton>
        )}
        {isFirst ? (
          <HistoryNavigationButton value="back" type="button" inactive>
            {'>>'}
          </HistoryNavigationButton>
        ) : (
          <HistoryNavigationButton value="back" type="button" onClick={handlePreviousButtonClick}>
            {'>>'}
          </HistoryNavigationButton>
        )}
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
