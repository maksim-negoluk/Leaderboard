import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
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
  const rerenderCheck = useRef<boolean>(true);

  useEffect(() => {
    if (rerenderCheck.current) {
      rerenderCheck.current = false;
      dispatch(fetchInitialState());
    }
  });

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/leaderboard" element={<><RecordHoldersBlock /><Leaderboard /><Modal /></>} />
      </Routes>
    </Wrapper>
  );
};

export default App;
