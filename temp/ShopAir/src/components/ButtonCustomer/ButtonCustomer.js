import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Block from '@components/Block';

const ButtonCustomer = ({
  text,
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
  textColor,
  borderRadius,
  onPress,
  fontSize,
  textTransform,
  fontFamily,
  fontWeight,
  backgroundColor,
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
      {...props}>
      <TouchableOpacity onPress={onPress} {...props}>
        <Block
          justifyCenter
          alignCenter
          width={width}
          height={height}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          {...props}>
          <Text
            style={{
              color: textColor,
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              textTransform: textTransform,
            }}
            {...props}>
            {text}
          </Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export default ButtonCustomer;
