import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 32px;
    padding-top: 20px;
 `;

export const  PointImage = styled.Image `
    width: 100%;
    height: 120px;
    border-radius: 10px;
    margin-top: 32px;
 `;

export const  PointName = styled.Text `
    color: #322153;
    font-size: 28px;
    font-family: 'Ubuntu-Bold';
    margin-Top: 24px;
 `;

export const  PointItems = styled.Text `
    font-family: 'RobotoSlab-Regular';
    font-size: 20px;
    line-height: 24px;
    margin-top: 8px;
    color: #34CB79;
 `;

export const  Address = styled.View `
    margin-top: 32px;
 `;
  
export const  AddressTitle = styled.Text `
    color: #322153;
    font-family: 'RobotoSlab-Medium';
    font-size: 16px;
 `;

export const  AddressContent = styled.Text `
    font-family: 'RobotoSlab-Regular';
    line-height: 24px;
    margin-top: 8px;
    color: #6C6C80;
    font-size: 15px;
 `;

export const  Footer = styled.View `
    border: 2px solid;
    border-top-color:#bfbfbf;
    flex-direction: row;
    justify-content: space-between;
 `;
  
export const  Button = styled(RectButton) `
    width: 48%;
    background-Color: #34CB79;
    border-radius: 10px;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 `;

export const  ButtonText = styled.Text `
    margin-Left: 8px;
    color: #FFF;
    font-size: 16px;
    font-family: 'RobotoSlab-Medium';
 `;

export const Phrases = styled.Text`
    color: #34cb79;
    font-family: 'Ubuntu-Bold';
    font-size: 20px; 
    margin-top: 70px;
    padding-left: 30px;
    padding-right: 20px;
    text-align: center

`;