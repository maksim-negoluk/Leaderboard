import { useSelector } from 'react-redux';
import { StyledLeaderboard, StyledBlock } from './style';
import User from './UserList/User';
import ControlPanel from './ControlPanel/ControlPanel';
import convertNumberToPlace from '../../utils/utils';
import { RootState } from '../../store/store';
import { IUser } from '../../types/userTypes';

const Leaderboard = () => {
  const users = useSelector((state: RootState) => state.leaderboard.userList);
  return (
    <StyledBlock>
      <ControlPanel />
      <StyledLeaderboard>
        {[...users]
          .sort((a, b) => b.score - a.score)
          .map((user: IUser, index) => (
            <User
              place={convertNumberToPlace(index + 1)}
              nickname={user.nickname}
              score={user.score}
              key={user.id}
              userId={user.id}
            />
          ))}
      </StyledLeaderboard>
    </StyledBlock>
  );
};

export default Leaderboard;
