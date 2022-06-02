import styled from 'styled-components';

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px;
  font-size: 0.9rem;
`;

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-around;
  width: clamp(130px, 30%, 230px);
`;

const Place = styled.span`
  color: #bbbbbb;
`;

const ProfilePicture = styled.div`
  border-radius: 5px;
  height: 20px;
  width: 20px;
  background-color: grey;
`;

const Score = styled.span`
  font-weight: bold;
`;

const NickName = styled.span``;

const ScoreChange = styled.span`
  color: #e5bf29;
`;

const Arrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #e5bf29;
`;

const EditButton = styled.img``;

export {
  UserBlock,
  StyledBlock,
  Place,
  ProfilePicture,
  Score,
  NickName,
  ScoreChange,
  Arrow,
  EditButton
};
