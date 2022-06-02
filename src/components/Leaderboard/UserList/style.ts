import styled from 'styled-components';

const UserBlock = styled.div`
  display: grid;
  grid-template-columns: 5% 5% 5% 15% 50% 15% 5%;
  align-items: center;
  padding: 0 20px 10px 20px;
  font-size: 0.9rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: 8% 8% 8% 18% 32% 18% 8%;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 10% 10% 10% 20% 20% 20% 10%;
    padding: 0 10px 10px 10px;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 13% 10% 13% 23% 0 30% 10%;
    padding: 0 10px 10px 10px;
  }
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

export { UserBlock, Place, ProfilePicture, Score, NickName, ScoreChange, Arrow, EditButton };
