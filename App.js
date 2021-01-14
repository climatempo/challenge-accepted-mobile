import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Search from './screens/Search';
import CityHome from './screens/CityHome'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#932ad4" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Pesquisa'>
          <Stack.Screen name="Pesquisa" component={Search} />
          <Stack.Screen name="Cidade" component={CityHome} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default App;
