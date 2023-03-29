import styled from 'styled-components';

const ProfileBackground = styled.div<{
   showProfile: boolean;
}>`
   position: absolute;
   display: ${(props) => (props.showProfile ? 'block' : 'none')};
   height: 100vh;
   width: 100%;
   background-color: rgba(33, 33, 33, 0.5);
`;

const ProfileContent = styled.div`
   height: 200px;
   width: 350px;
   margin: auto;
   display: flex;
   align-items: center;
`

const ProfileImage = styled.img`
   height: 100px;
   width: 100px;
   background-color: gray;
   border-radius: 50%;
`;

const ProfileTextBlock = styled.div`
   height: 100%;
   width: 250px;
   padding-left: 40px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

const UserNickname = styled.h2`
   font-size: 20px;
`

const UserScore = styled.h2`
   font-size: 20px;
`

export { ProfileBackground, ProfileImage, ProfileContent, ProfileTextBlock, UserNickname, UserScore };