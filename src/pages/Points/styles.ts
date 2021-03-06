import styled from 'styled-components/native';
import {StatusBar} from 'react-native'
import MapView,{Marker} from 'react-native-maps'

    export const Container= styled.View`
      flex: 1;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
    `;
  
    export const Title =styled.Text`
      font-size: 20px;
      font-family: 'Ubuntu-Medium';
      margin-top: 24px;
    `;
  
    export const Description= styled.Text`  
      color: #6C6C80;
      font-size: 16px;
      margin-top: 4px;
      font-family: 'RobotoSlab-Regular';
    `;
  
    export const MapContainer = styled.View`
      flex: 1;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 16px;
    `;
  
    export const Map = styled(MapView)`
      width: 100%;
      height: 100%;
    `;
  
    export const MapMarker = styled(Marker)`
      width: 90px;
      height: 80px; 
    `;
  
    export const MapMarkerContaner =styled.View`
      width: 90px;
      height: 70px;
      color: #34CB79;
      background-color: #34CB79;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      align-items: center;
    `;
  
    export const MapMarkerImage = styled.Image`
      width: 90px;
      height: 45px;
      
    `;
  
    export const MapMarkerTitle = styled.Text`
      flex: 1;
      font-family: 'RobotoSlab-Regular';
      color: #FFF;
      font-size: 13px;
      line-height: 23px;
      text-align: center;
      
    `;
  
    export const TitleContainer = styled.View`
      width: 90px;
      height: 20px;
      background-color: #34CB79;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      align-items: center;
`;

    export const ItemsContainer = styled.View`
      flex-direction: row;
      margin-top: 16px;
      margin-bottom: 32px;
    `;
  
  export const Item= styled.TouchableOpacity`
      background-color: #fff;
      border-width: 2px;
      border-color: #eee;
      height: 120px;
      width: 120px;
      border-radius: 8px;
      padding-left: 16px;
      padding-top: 20px;
      padding-bottom: 16px;
      margin-right: 8px;
      align-items: center;
      justify-content: space-between;
      text-align: center;
`;
    
   export const SelectedItem = styled.View `
      border-color: #34CB79;
      border-width: 2px;
`;
  
    export const ItemTitle = styled.Text`
      font-family: 'RobotoSlab-Regular';
      text-align: center;
      font-size: 13px;
`;