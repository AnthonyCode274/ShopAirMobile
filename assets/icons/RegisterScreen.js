/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {icons} from '@assets';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export const SignDetail = () => {
  return (
    <View style={{height: '100%', backgroundColor: '#ffff'}}>
      <View style={styles.Logo}>
        <Image
          style={{width: 310, height: 100}}
          source={icons.icon_logo_shopair}
        />
      </View>
      <View style={styles.input}>
        <View style={{width: 380, marginTop: 1}}>
          <TextInput style={styles.Textinput} placeholder=" Email..." />
          <TextInput style={styles.Textinput} placeholder=" Password..." />
          <TextInput
            style={styles.Textinput}
            placeholder=" Confim Password..."
          />
          <View style={{flexDirection: 'row', marginLeft: 300}}>
            <TouchableOpacity>
              <Text style={styles.Text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: 100,
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: '#ffff', fontSize: 20, fontWeight: 'bold'}}>
            Register{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Favicon}>
        <View style={{flexDirection: 'row', marginVertical: 50}}>
          <TouchableOpacity style={styles.Ctn_FB}>
            <Image
              style={{marginLeft: 10, width: 20, height: 20, borderRadius: 5}}
              source={icons.icon_facebook}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
              {' '}
              Login With FaceBook{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Ctn_GG}>
            <Image style={{width: 20, height: 20}} source={icons.icon_google} />
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {' '}
              Continue With Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignDetail;

export const styles = StyleSheet.create({
  Textinput: {
    height: 40,
    margin: 7,
    backgroundColor: '#D3E4CD',
    borderRadius: 7,
  },
  Logo: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '50%',
    width: '100%',
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  Favicon: {
    height: '20%',
    alignItems: 'center',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  Ctn_GG: {
    backgroundColor: '#FEF5ED',
    marginLeft: 5,
    flexDirection: 'row',
    width: 180,
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ctn_FB: {
    backgroundColor: '#4a6ea8',
    flexDirection: 'row',
    width: 180,
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
