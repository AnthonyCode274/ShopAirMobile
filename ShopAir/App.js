import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStackScreens from '@screens/stackScreen/AppStackNavigation';
import {screens} from '@screens/screens';
import {components} from '@components/component';

const App = () => {
  return (
    <NavigationContainer>
      <AppStackScreens />
    </NavigationContainer>
  );
};

export default App;
