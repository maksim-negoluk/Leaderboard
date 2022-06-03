import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialState } from '../store/leaderboardSlice';
import Wrapper from './styles';
import Leaderboard from './Leaderboard/Leaderboard';
import RecordHoldersBlock from './RecordHoldersBlock/RecordHoldersBlock';
import Modal from './AddUserModal/Modal';
import { RootDispatch } from '../store/store';

const App = () => {
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchInitialState()).unwrap();
  });

  return (
    <Wrapper>
      <h2>Leaderboard</h2>
      <RecordHoldersBlock />
      <Leaderboard />
      <Modal />
    </Wrapper>
  );
};

export default App;
