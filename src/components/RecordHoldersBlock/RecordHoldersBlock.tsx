import {
  StyledBlock,
  Title,
  RecordHoldersList,
  UserBlock,
  ProfilePicture,
  Score,
  NickName,
  Logo
} from './style';

const RecordHoldersBlock = () => (
  <StyledBlock>
    <Title>All time highest scores</Title>
    <RecordHoldersList>
      <UserBlock>
        <ProfilePicture>
          <Score>12</Score>
        </ProfilePicture>
        <NickName>Fred</NickName>
      </UserBlock>
      <UserBlock>
        <ProfilePicture>
          <Score>12</Score>
        </ProfilePicture>
        <NickName>Fred</NickName>
      </UserBlock>
      <UserBlock>
        <ProfilePicture>
          <Score>12</Score>
        </ProfilePicture>
        <NickName>Fred</NickName>
      </UserBlock>
    </RecordHoldersList>
    <Logo src="#" alt="logo" />
  </StyledBlock>
);

export default RecordHoldersBlock;
