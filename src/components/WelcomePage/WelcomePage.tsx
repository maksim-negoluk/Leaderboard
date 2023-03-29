import {
   WelcomePageContent,
   ContentBlock,
   InformationBlock,
   BlockArticle,
   WelcomePageText,
   WelcomePageImage,
} from './style';

const podium = require('../../static/podium.jpg');
const prize = require('../../static/prize.png');
const maintenance = require('../../static/maintenance.png');

const WelcomePage = () => {
   return (
      <WelcomePageContent>
         <ContentBlock>
            <BlockArticle>What`s our goal</BlockArticle>
            <InformationBlock>
               <WelcomePageText>
                  Our team have made this leaderboard to present your personal records and
                  find a challange for yourself. We update data everyday to show your best results.
                  Find a new friend and motivate each other for the new achivements...
               </WelcomePageText>
               <WelcomePageImage src={prize} />
            </InformationBlock>
         </ContentBlock>
         <ContentBlock>
            <BlockArticle>Tournament announcement</BlockArticle>
            <InformationBlock>
               <WelcomePageImage src={podium} />
               <WelcomePageText>
                  We are announcing a tournament with valuable prizes.
                  It will last for two weeks from 25 September 2 a.m to 9 October 2 a.m.
                  Main goal of this event to achive highest score in team of three players
                  in new provided game mode...
               </WelcomePageText>
            </InformationBlock>
         </ContentBlock>
         <ContentBlock>
            <BlockArticle>Maintenance</BlockArticle>
            <InformationBlock>
               <WelcomePageText>
                  Game servers would be off at 18 September from 4 p.m to 1 a.m.
                  After maintenance compensation would be given to the players
                  for the caused troubles...
               </WelcomePageText>
               <WelcomePageImage src={maintenance} />
            </InformationBlock>
         </ContentBlock>
      </WelcomePageContent>
   )
}

export default WelcomePage