/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Block from '@components/Block';
import {Colors, icons, Sizes} from '@assets';

const TextInputWithLabel = ({
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
  onPressIconRight,
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
      <Image
        style={{width: sizeIcon, height: sizeIcon, marginLeft: 10}}
        source={iconLeft}
      />
      <TextInput
        value={value}
        width={width - sizeIcon - 20 - paddingHorizontal}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        color={textColor}
        paddingHorizontal={paddingHorizontal}
        {...props}
      />
      <TouchableOpacity onPress={onPressIconRight}>
        <Image
          style={{width: sizeIcon, height: sizeIcon, marginRight: 10}}
          source={iconRight}
        />
      </TouchableOpacity>
    </Block>
  );
};

export default TextInputWithLabel;
