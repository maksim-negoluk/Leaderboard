import styled from 'styled-components';

const StyledBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 0 20px 0;
  width: 90%;
  background-color: #7d1ecd;
  color: white;
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

const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 0 5px 0;
  height: 60px;
  width: 60px;
  background-color: #bbb8b8;
`;

const Score = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 3px 5px;
  background-color: #f1efef;
  color: green;
`;

const NickName = styled.span`
  margin: 0 auto;
  font-size: 0.8rem;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  right: 10%;
  @media screen and (max-width: 376px) {
    position: relative;
    width: 100%;
    top: 0;
    right: 0;
  }
`;

export { StyledBlock, Title, RecordHoldersList, UserBlock, ProfilePicture, Score, NickName, Logo };
