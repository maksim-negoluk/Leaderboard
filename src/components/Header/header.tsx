import {
   HeaderBlock,
   LeaderboardLogo,
   HeaderLink,
} from './style';

const Header = () => {
   return (
      <HeaderBlock>
         <LeaderboardLogo>Leaderboard</LeaderboardLogo>
         <HeaderLink>Leaderboard</HeaderLink>
         <HeaderLink>Home</HeaderLink>
      </HeaderBlock>
   )
}

export default Header