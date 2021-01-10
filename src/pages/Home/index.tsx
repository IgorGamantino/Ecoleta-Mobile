import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Image, Text, View } from 'react-native';


import { Container, Main, Button, Description, Title, 
  Input,ButtonIcon,ButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container 
    imageStyle={{ width: 274, height: 368 }}
    source={require('../../assets/home-background.png')}>
      <Main>
      <Image source={require('../../assets/logo.png')} />
        <Title>Seu marketplace de colete de resíduos</Title>
        <Description>Ajudamos pessoas a encontrarem pontos de coleta eficiente.</Description>
      </Main>
      <View>
        <Button onPress={()=>navigation.navigate('Points') } >
          <ButtonIcon>
            <Icon name='arrow-right' size={24} color='#fff' />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
          </Button>
      </View>
    </Container>
  );
};

export default Home;
