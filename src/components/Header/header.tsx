import {
   HeaderBlock,
   LeaderboardLogo,
   LeaderboardPageLink,
   HomePageLink,
} from './style';

const Header = () => {
   return (
      <HeaderBlock>
         <LeaderboardLogo>Leaderboard</LeaderboardLogo>
         <LeaderboardPageLink>Leaderboard</LeaderboardPageLink>
         <HomePageLink>Home</HomePageLink>
      </HeaderBlock>
   )
}

export default Header