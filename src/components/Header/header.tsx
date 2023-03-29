import {
   HeaderBlock,
   LeaderboardLogo,
   HeaderLink,
} from './style';

const Header = () => {
   return (
      <HeaderBlock>
         <LeaderboardLogo>Leaderboard</LeaderboardLogo>
         <HeaderLink to="/leaderboard">Leaderboard</HeaderLink>
         <HeaderLink to="/home">Home</HeaderLink>
      </HeaderBlock>
   )
}

export default Header