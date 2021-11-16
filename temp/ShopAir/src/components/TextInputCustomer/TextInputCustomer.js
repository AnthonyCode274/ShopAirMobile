import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Block from '@components/Block';
import {Colors, Sizes} from '@assets';

const TextInputCustomer = ({
  text,
  style,
  value,
  width,
  height,
  maxWidth,
  maxHeight,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  placeholder,
  borderRadius,
  placeholderTextColor,
  textColor,
  backgroundColor,
  onChangeText,
  keyboardType,
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
        marginRight={marginRight}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          width={width}
          height={height}
          color={textColor}
          paddingHorizontal={paddingHorizontal}
          {...props}
        />
      </Block>
  );
};

export default TextInputCustomer;
