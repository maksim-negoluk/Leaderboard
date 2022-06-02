import styled from 'styled-components';

const StyledControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 30px 20px;
  @media screen and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.span`
  color: #151414;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0 0 10px 0;
`;
const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  & * {
    margin: 0 5px;
  }
`;
const HistoryNavigationButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #151414;
  font-weight: bold;
`;
const NewDayButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 4px 16px;
  background-color: #cd671e;
  color: #eee8e8;
  font-size: clamp(0.8rem, 3vw, 1rem);
`;
const AddUserButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 4px 16px;
  background-color: #7d1ecd;
  color: #eee8e8;
  font-size: clamp(0.8rem, 3vw, 1rem);
  @media screen and (max-width: 426px) {
    padding: 4px 8px;
  }
`;

export {
  StyledControlPanel,
  Title,
  ButtonsBlock,
  HistoryNavigationButton,
  NewDayButton,
  AddUserButton
};
