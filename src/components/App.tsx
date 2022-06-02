import Wrapper from './styles';
import Leaderboard from './Leaderboard/Leaderboard';
import RecordHoldersBlock from './RecordHoldersBlock/RecordHoldersBlock';
import AddUserModal from './AddUserModal/AddUserModal';

const App = () => (
  <Wrapper>
    <h2>Leaderboard</h2>
    <RecordHoldersBlock />
    <Leaderboard />
    <AddUserModal />
  </Wrapper>
);

export default App;
