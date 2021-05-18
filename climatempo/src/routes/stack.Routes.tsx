import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/Home';
import Weather from '../pages/Weather';
import Historic from '../pages/Historic';
import Offline from '../pages/Offline';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}
  >
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Weather" component={Weather}/>
    <Stack.Screen name="Historic" component={Historic}/>
    <Stack.Screen name="Offline" component={Offline}/>
  </Stack.Navigator>
);

export default StackRoutes;
