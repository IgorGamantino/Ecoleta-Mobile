import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Points from '../pages/Points';
import Detail from '../pages/Detail';

// import { Container } from './styles';

const AppRoutes = createStackNavigator();
const Routes: React.FC = () => {
  return (
      <NavigationContainer>
          <AppRoutes.Navigator headerMode='none' screenOptions={{ headerShown: false}} >
             <AppRoutes.Screen  name="Home" component={Home} />
              <AppRoutes.Screen  name="Points" component={Points} />
              <AppRoutes.Screen name="Detail" component={Detail}  />
          </AppRoutes.Navigator>
      </NavigationContainer>
  )
}

export default Routes;