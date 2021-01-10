import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity,StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';
import  WhatIcon  from 'react-native-vector-icons/FontAwesome';

import { Container, Address,AddressContent,AddressTitle,
Button,ButtonText,Footer,PointImage,PointItems,PointName, Phrases } from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}} >
      <Container>
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
          <Icon name='arrow-left' size={20} color='#34cb79' />
        </TouchableOpacity>

        <PointImage source={require('../../assets/image.png')} />

        <PointName>Ecoponto Tatuapé</PointName>

        <PointItems>Papel, Papelão e Lampada</PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>Av. Salim Farah Maluf, 179 - Tatuapé, São Paulo - SP</AddressContent>
        </Address>
        <Phrases>Reciclar é protegermo-nos da nossa propria devastração</Phrases>
      </Container>

      <Footer  style={{paddingVertical: 20, paddingHorizontal: 32,}}>
        <Button>
        <WhatIcon  name="whatsapp" size={20} color="#fff"/>
        <ButtonText>Whatsapp</ButtonText>
        </Button>

        <Button>
        <Icon  name="mail" size={20} color="#fff"/>
        <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  hairlineWidth:{
    color:'#fff'
  }
})