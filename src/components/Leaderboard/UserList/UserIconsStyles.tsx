const avatarHair = ["sideShave", "bald", "balding", "bobCut", "cap", "curly", "extraLong", "fade", "mohawk", "pigtails", "sideShave"];
const avatarHairColor = ["ff5050", "fe5caa", "5a3214", "ffff5a", "3264c8", "282828"];
const avatarSkinColor = ["e8beac", "f39d7a", "b37629", "6d4718", "d1a3a4", "c58c85", "f4c46c"];
const avatarMouth = ["smile", "frown", "bigSmile", "smirk", "lips", "surprise"];
const avatarEyes = ["glasses", "happy", "open", "wink", "sunglasses", "sleep"];
const avatarClothingColor = ["25b343", "39b1dc", "19154a", "ecd21d", "d41d84", "c9171f", "483c3c", "29e859", "e843a6"];

export const randomAvatar = () => {
   return `https://api.dicebear.com/5.x/personas/svg?clothingColor=${avatarClothingColor[Math.floor(Math.random() * avatarClothingColor.length)]}
&skinColor=${avatarSkinColor[Math.floor(Math.random() * avatarSkinColor.length)]}
&hairColor=${avatarHairColor[Math.floor(Math.random() * avatarHairColor.length)]}
&hair=${avatarHair[Math.floor(Math.random() * avatarHair.length)]}
&eyes=${avatarEyes[Math.floor(Math.random() * avatarEyes.length)]}
&mouth=${avatarMouth[Math.floor(Math.random() * avatarMouth.length)]}`}