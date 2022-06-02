import {
  UserBlock,
  StyledBlock,
  Place,
  ProfilePicture,
  Score,
  NickName,
  Arrow,
  ScoreChange,
  EditButton
} from './style';

const pencil = require('../../../static/pencil.png');

const User = () => (
  <UserBlock>
    <StyledBlock>
      <Place>1st</Place>
      <ProfilePicture />
      <Score>12</Score>
      <NickName>Elena</NickName>
    </StyledBlock>
    <StyledBlock>
      <ScoreChange>
        <Arrow /> 6 places
      </ScoreChange>
      <EditButton src={pencil} />
    </StyledBlock>
  </UserBlock>
);

export default User;
