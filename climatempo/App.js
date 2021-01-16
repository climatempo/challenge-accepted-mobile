import React from 'react';
import { SafeAreaView, Platform } from 'react-native'

import Header from './src/components/Header'
import InputSearch from './src/components/InputSearch'
import WeatherContainer from './src/components/WeatherContainer'

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
        backgroundColor: '#e0e0e0'
      }}
      >
      <Header />
      <InputSearch />
      <WeatherContainer />
    </SafeAreaView>
  );
}
