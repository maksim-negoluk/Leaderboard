import {
  StyledControlPanel,
  Title,
  ButtonsBlock,
  HistoryNavigationButton,
  NewDayButton,
  AddUserButton
} from './style';

const ControlPanel = () => (
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
      <AddUserButton value="new user" type="button">
        + add new user
      </AddUserButton>
    </ButtonsBlock>
  </StyledControlPanel>
);

export default ControlPanel;
