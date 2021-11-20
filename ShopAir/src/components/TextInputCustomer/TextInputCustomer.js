import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import Block from '@components/Block';
import {Colors, icons, Sizes} from '@assets';
import {AntDesign} from 'react-native-vector-icons/AntDesign'

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
  iconRight,
  iconLeft,
  sizeIcon,
  onPressIcon,
  ...props
}) => {
  return (
    <Block
      width={width}
      height={height}
      row
      alignCenter
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
        color={textColor}
        paddingHorizontal={paddingHorizontal}
        {...props}
      />
    </Block>
  );
};

export default TextInputCustomer;
