import styled from "styled-components/native";

export const VagasContainer = styled.View`
flex: 1;
display: "flex";
background-color: #ffff;
align-items: center;
justify-content: center;
`
export const Logo = styled.Image`
width: 100%;
height: 40%;
position: absolute;
top: -5%;
`
export const Title = styled.Text`
font-size: 32px;
color: #000;
top: 27%;
position: absolute;
`
export const ContainerV = styled.View`
width: 332;
height: 672;
display: flex;
top:22%;
`
export const WraperV = styled.View`
width: 332;
height: 116;
display: flex;
justify-content: space-between;
flex-direction: row;
`

export const Vaga = styled.TouchableOpacity`
width: 157;
height: 92;
background-color: #baba;
border-radius: 10px;
align-items: center;
justify-content: center;
`
export const VagaDeficiente = styled.TouchableOpacity`
width: 157;
height: 92;
background-color: #baba;
border-radius: 10px;
align-items: center;
justify-content: center;
`
export const Txt1 = styled.Text`
font-size: 24;
text-align: center;
color: #1A1F16;
`
export const Btn2 = styled.TouchableOpacity`
display: "flex";
background-color:rgb(247, 248, 246);
width: 348;
height: 57;
border-radius: 10px;
border:rgb(247, 5, 17) 2px;
justify-content: center;
position: absolute;
bottom: 37;
`
export const Txt2 = styled.Text`
text-align: center;
font-size: 24;
color:rgb(250, 7, 7);
`
export const Livre = styled.Image`
height: 148;
width: 86;
transform: rotate(90deg);
`
export const Ocupado = styled.Image`
height: 174;
width: 174;
transform: rotate(90deg);
`
export const Deficiente = styled.Image`
height: 174;
width: 174;
/* transform: rotate(180deg); */
`