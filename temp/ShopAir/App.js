import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import RootStack from '@screens/Navigation/RootStack';
import {Provider as PaperProvider} from 'react-native-paper';
import { PaperAppBar } from '@components/AppBar/AppBar';

const App = () => {
  return (
    <>
      <RootStack />
    </>
  );
};

export default App;
