import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import SearchResults from './src/pages/SearchResults';
import WeatherForecast from './src/pages/WeatherForecast';
import SearchHistoryProvider from './src/context/searchHistoryContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SearchHistoryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              title: 'Clima Tempo',
              headerTintColor: '#ffffff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#004983',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            }} />
          <Stack.Screen
            name={"SearchResults"}
            component={SearchResults}
            options={{
              title: 'Resultados',
              headerTintColor: '#ffffff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#004983',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            }} />
          <Stack.Screen
            name={"WeatherForecast"}
            component={WeatherForecast}
            options={{
              title: 'Previsão do Tempo',
              headerTintColor: '#ffffff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#004983',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchHistoryProvider>
  );
}

export default App;