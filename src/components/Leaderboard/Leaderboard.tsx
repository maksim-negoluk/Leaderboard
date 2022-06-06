import { useSelector } from 'react-redux';
import { StyledLeaderboard, StyledBlock } from './style';
import User from './UserList/User';
import ControlPanel from './ControlPanel/ControlPanel';
import { convertNumberToPlace, definePositionShift } from '../../utils/leaderboardUtils';
import { RootState } from '../../store/store';
import { IUser } from '../../types/userTypes';

const Leaderboard = () => {
  const users = useSelector((state: RootState) => state.leaderboard.currentUserList);
  return (
    <StyledBlock>
      <ControlPanel />
      <StyledLeaderboard>
        {[...users]
          .sort((a, b) => b.score - a.score)
          .map((user: IUser, index) => (
            <User
              place={convertNumberToPlace(index + 1)}
              nickname={user.name}
              score={user.score}
              key={user.id}
              userId={user.id}
              positionShift={
                user.previousScore
                  ? `${definePositionShift(
                      [...users].map((userValue) => userValue.score),
                      user.score,
                      user.previousScore
                    )}`
                  : 'new user'
              }
            />
          ))}
      </StyledLeaderboard>
    </StyledBlock>
  );
};

export default Leaderboard;
