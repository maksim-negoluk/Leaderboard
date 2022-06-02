import Wrapper from './styles';
import Leaderboard from './Leaderboard/Leaderboard';
import RecordHoldersBlock from './RecordHoldersBlock/RecordHoldersBlock';
import Modal from './AddUserModal/Modal';

const App = () => (
  <Wrapper>
    <h2>Leaderboard</h2>
    <RecordHoldersBlock />
    <Leaderboard />
    <Modal />
  </Wrapper>
);

export default App;
