import React, { useEffect, useLayoutEffect } from 'react';
import { AppState, StyleSheet, Text, I18nManager } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import AuthStack from './src/navigation/AuthStack';
import AppStack from './navigation/AppStack';
import { store, persistor } from './redux/store';


//global __DEV__
{
  /*
if (__DEV__) {
  import('./services/reactotron').then(() => {});
}
*/
}
function App() {
 
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />,
      }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}

export default App;
