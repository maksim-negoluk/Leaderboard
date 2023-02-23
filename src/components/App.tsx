import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialState } from '../store/leaderboardSlice';
import Wrapper from './styles';
import Header from './Header/header'
import Leaderboard from './Leaderboard/Leaderboard';
import RecordHoldersBlock from './RecordHoldersBlock/RecordHoldersBlock';
import Modal from './AddUserModal/Modal';
import { RootDispatch } from '../store/store';
import WelcomePage from './WelcomePage/WelcomePage';

const App = () => {
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchInitialState());
  });

  return (
    <Wrapper>
      <Header />
      <WelcomePage />
      {/* <RecordHoldersBlock />
      <Leaderboard />
      <Modal /> */}
    </Wrapper>
  );
};

export default App;
