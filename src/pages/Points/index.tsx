import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { ScrollView,Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Feather';
import MapView,{Marker} from 'react-native-maps';

import { Container,Description,Item,ItemTitle,ItemsContainer,Map,MapContainer
,MapMarker,MapMarkerContaner,MapMarkerImage,MapMarkerTitle,SelectedItem,Title,TitleContainer } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Points: React.FC = () => {
  const navigation = useNavigation()

  return (
  <SafeAreaView style={{flex: 1}}>
    <Container>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Icon name='arrow-left' size={20} color='#34cb79' />
      </TouchableOpacity>

      <Title>Bem vindo.</Title>
      <Description>Encontre no mapa um ponto de coleta.</Description>

      <MapContainer>
        <Map initialRegion={{
          latitude: -23.5299194,
          longitude: -46.5852123,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014
        }}>
          <Marker 
            onPress={()=> navigation.navigate('Detail')}
           coordinate={{
            latitude:  -23.5299194,
            longitude: -46.5852123,
            
          }}>
            <MapMarkerContaner>
             <MapMarkerImage  source={require('../../assets/image.png')} />
                <MapMarkerTitle>Ecoponto Tatuapé</MapMarkerTitle>
            </MapMarkerContaner>
          </Marker>
        </Map>
      </MapContainer>
    </Container>

    <ItemsContainer>
     <ScrollView contentContainerStyle={{paddingHorizontal: 20}}
     horizontal showsHorizontalScrollIndicator={false} >
      <Item>
      <Image  style={{width:42,height:42}}  source={require('../../assets/bateria.png')} />
        <ItemTitle>Bateria</ItemTitle>
      </Item>

      <Item>
      <Image  style={{width:42,height:42}}  source={require('../../assets/eletronicos.png')} />
        <ItemTitle>Eletronicos</ItemTitle>
      </Item>


      <Item onPress={()=>navigation.navigate('Detail')} >
      <Image  style={{width:42,height:42}}  source={require('../../assets/lampadas.png')} />
        <ItemTitle>Lampadas</ItemTitle>
      </Item>

      <Item>
      <Image  style={{width:42,height:42}}  source={require('../../assets/papeis.png')} />
        <ItemTitle>Papeis e papelao</ItemTitle>
      </Item>
      
      <Item>
      <Image style={{width:42,height:42}}  source={require('../../assets/organicos.png')} />
        <ItemTitle>Organicos</ItemTitle>
      </Item>

      <Item>
      <Image  style={{width:42,height:42}}  source={require('../../assets/oleo.png')} />
        <ItemTitle>Óleos</ItemTitle>
      </Item>
      </ScrollView>
    </ItemsContainer>
    

  </SafeAreaView>
  );
};

export default Points;
