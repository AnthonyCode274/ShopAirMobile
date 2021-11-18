import {Colors, Fonts} from '@assets';
import Block from '@components/Block';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextCustom = ({
  label,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...props
}) => {
  return (
    <Block
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <Text
        style={{
          fontSize: fontSize,
          color: color,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
        }}
        {...props}>
        {label}
      </Text>
    </Block>
  );
};

export default TextCustom;
