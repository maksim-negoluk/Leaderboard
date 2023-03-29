import styled from 'styled-components'

const WelcomePageContent = styled.div`
   width: 100%;
`

const ContentBlock = styled.div`
   box-sizing: border-box;
   border-radius: 10px;
   padding: 10px 40px;
   margin: 10px auto 20px;
   width: 90%;
   background-color: #7d1ecd;
   color: white;
`;

const BlockArticle = styled.h2`
   font-size: 24px;
   text-align: center;
`

const InformationBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const WelcomePageText = styled.p`
   width: 45%;
   font-size: 16px;
`

const WelcomePageImage = styled.img`
   height: 200px;
   width: 45%;
`

export { WelcomePageContent, ContentBlock, InformationBlock, BlockArticle, WelcomePageText, WelcomePageImage }