import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextDirectory} from 'helper/TextDirectory';

const Trademark = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(TextDirectory.onBroading)}
        style={styles.button_container}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

<<<<<<< HEAD:ShopAir/src/screens/SettingScreen/SettingScreen.js
export default SettingScreen;
=======
export default Trademark;
>>>>>>> dab610226ab4dab8510f4a4975d9688bf89c0f77:ShopAir/src/screens/Trademark.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
});
