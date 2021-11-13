import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '@assets';

const ShadowTabBar = () => (
  <LinearGradient
    start={{x: 1, y: 0}} // for a vertical gradient
    end={{x: 1, y: 1}} // for a vertical gradient
    locations={[0, 0.3, 1]} // 3 "steps" of color
    colors={['#ededed', '#e2e2e2', '#c6c6c6']} // top color, middle color, bottom color
    style={styles.gradient}
  />
);

const styles = StyleSheet.create({
  gradient: {
    height: 3,
  },
});

export default ShadowTabBar;
