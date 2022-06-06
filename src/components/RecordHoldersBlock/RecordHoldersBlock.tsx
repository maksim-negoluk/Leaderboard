import { useSelector } from 'react-redux';
import { IUser } from '../../types/userTypes';
import { RootState } from '../../store/store';
import {
  StyledBlock,
  Title,
  RecordHoldersList,
  UserBlock,
  ProfilePicture,
  Score,
  NickName
} from './style';

const RecordHoldersBlock = () => {
  const users: IUser[] = useSelector((state: RootState) => state.leaderboard.currentUserList);
  return (
    <StyledBlock>
      <Title>All time highest scores</Title>
      <RecordHoldersList>
        {[...users]
          .sort((a: IUser, b: IUser) => b.score - a.score)
          .slice(0, 3)
          .map((user: IUser) => (
            <UserBlock key={user.id}>
              <ProfilePicture>
                <Score>{user.score}</Score>
              </ProfilePicture>
              <NickName>{user.name}</NickName>
            </UserBlock>
          ))}
      </RecordHoldersList>
    </StyledBlock>
  );
};

export default RecordHoldersBlock;
