import { StyledLeaderboard, StyledBlock } from './style';
import User from './UserList/User';
import ControlPanel from './ControlPanel/ControlPanel';

const Leaderboard = () => (
  <StyledBlock>
    <ControlPanel />
    <StyledLeaderboard>
      <User />
      <User />
      <User />
    </StyledLeaderboard>
  </StyledBlock>
);

export default Leaderboard;
