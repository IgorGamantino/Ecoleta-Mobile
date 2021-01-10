import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './src/routes/routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
   <>
    <StatusBar backgroundColor='#fff' barStyle='dark-content' translucent />
    <Routes />
   </>
  )
}

export default App;