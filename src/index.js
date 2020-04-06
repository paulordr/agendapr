import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
//import Routes from './routes';
import App from './App';
import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store ={store}>
      <PersistGate persistor={persistor}>
    <StatusBar barStyle="light-content" backgroundColor="#1735CC" />
    <NavigationContainer>{<App />}</NavigationContainer>
    </PersistGate>
    </Provider>
  );
}
