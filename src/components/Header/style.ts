import styled from 'styled-components';

const HeaderBlock = styled.div`
   box-sizing: border-box;
   border-radius: 10px;
   padding: 10px 40px;
   margin: 10px 0;
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #7d1ecd;
   color: white;
`;

const LeaderboardLogo = styled.h2`
   font-size: 28px;
   flex-grow: 9;
`

const LeaderboardPageLink = styled.a`
   font-size: 16px;
   text-align: right;
   flex-grow: 1;
   transition: 0.3s;

   &:hover {
      cursor: pointer;
      color: #dce0dd;
   }
`

const HomePageLink = styled.a`
   font-size: 16px;
   text-align: right;
   flex-grow: 1;
   transition: 0.3s;

   &:hover {
      cursor: pointer;
      color: #dce0dd;
   }
`

export { HeaderBlock, LeaderboardLogo, LeaderboardPageLink, HomePageLink }