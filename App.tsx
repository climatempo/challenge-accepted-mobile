import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/header';
import Home from './src/screens/home';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Home />
    </SafeAreaView>
  );
};

export default App;
