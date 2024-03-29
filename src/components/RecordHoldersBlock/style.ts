import styled from 'styled-components';

const logo = require(`../../static/people.svg`).default;

const StyledBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 0 20px 0;
  width: 90%;
  background: url(${logo}), #7d1ecd;
  background-size: clamp(150px, 25%, 300px), 100%;
  background-repeat: no-repeat;
  background-position: 95% 50%;
  color: white;
  @media screen and (max-width: 450px) {
    background: #7d1ecd;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.span``;

const RecordHoldersList = styled.div`
  display: flex;
  padding: 10px 0;
  width: 60%;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const UserBlock = styled.div`
  margin: 0 15px 0 0;
  text-align: center;
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  box-sizing: border-box;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  background-color: #bbb8b8;
`;

const ProfilePicture = styled.img`
  position: absolute;
  margin-bottom: 10px;
`

const Score = styled.span`
  position: absolute;
  display: inline-block;
  font-size: 12px;
  border-radius: 5px;
  padding: 3px 5px;
  background-color: #f1efef;
  color: green;
`;

const NickName = styled.span`
  margin: 0 auto;
  font-size: 0.8rem;
`;

export { StyledBlock, Title, RecordHoldersList, UserBlock, Profile, ProfilePicture, Score, NickName };
