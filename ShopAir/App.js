import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@navigations/RootStack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const myState = {counter: 0};

const reducer = (state = myState, action) => {
  console.log(state.counter);
  switch (action.type) {
    case 'INCREASE':
      return {counter: state.counter + 1};
    case 'DECREASE':
      return {counter: state.counter - 1};
    default:
      break;
  }
  return state;
};
const store = createStore(reducer);

const App = () => {
  const [state, setstate] = useState({
    cart: 0,
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      {/* <Counter /> */}
    </Provider>
  );
};

export default App;
