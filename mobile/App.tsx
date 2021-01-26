import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/screens/Main';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
