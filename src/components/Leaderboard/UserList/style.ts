import styled from 'styled-components';

const newUserColor = `#565656`;
const samePlaceColor = `#e3ba12`;
const higherPlaceColor = `#61e81d`;
const lowerPlaceColor = `#ec2727`;

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

const ScoreChange = styled.span<{ positionShift: string }>`
  display: flex;
  align-items: center;
  ${({ positionShift }) => {
    if (positionShift === 'same') return `color: ${samePlaceColor}`;
    if (positionShift === 'descending') return `color: ${lowerPlaceColor}`;
    if (positionShift === 'ascending') return `color: ${higherPlaceColor}`;
    return `color: ${newUserColor}`;
  }}
`;

const Arrow = styled.span<{ positionShift: string }>`
  display: inline-block;
  width: 0;
  height: 0;
  margin: 0 3px 0 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  ${({ positionShift }) => {
    if (positionShift === 'same')
      return `border-bottom: 4px solid ${samePlaceColor}; transform: rotate(90deg);`;
    if (positionShift === 'descending')
      return `border-bottom: 4px solid ${lowerPlaceColor}; transform: rotate(180deg);`;
    if (positionShift === 'ascending')
      return `border-bottom: 4px solid ${higherPlaceColor}; transform: rotate(0deg);`;
    return `border-bottom: 4px solid ${newUserColor}; transform: rotate(90deg);`;
  }}
`;

const EditButton = styled.img``;

export { UserBlock, Place, ProfilePicture, Score, NickName, ScoreChange, Arrow, EditButton };
