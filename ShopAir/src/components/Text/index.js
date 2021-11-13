import {Colors, Fonts} from '@assets';
import {getSize} from 'helper/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {handleMargin, handlePadding} from '@components/Block/shared';

const Typography = (props) => {
  const {
    flex,
    flexShrink,
    flexGrow,
    size = 14,
    color = 'text',
    center,
    right,
    justify,
    padding,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    style,
    fontType = 'regular',
    lineHeight,
    animated,
    customFont = 'default',
    ...textProps
  } = props;

  const textStyle = [
    flex && {flex: 1},
    flexShrink && {flexShrink: 1},
    flexGrow && {flexGrow: 1},
    {fontWeight: Fonts.fontWeight[fontType]},
    {color: Colors[color] || color},
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    justify && {textAlign: 'justify'},
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    paddingTop && {paddingTop: getSize.m(paddingTop)},
    paddingRight && {paddingRight: getSize.m(paddingRight)},
    paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
    paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
    marginBottom && {marginBottom: getSize.m(marginBottom)},
    marginTop && {marginTop: getSize.m(marginTop)},
    marginRight && {marginRight: getSize.m(marginRight)},
    marginLeft && {marginLeft: getSize.m(marginLeft)},
    paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
    paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
    marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
    marginVertical && {marginVertical: getSize.m(marginVertical)},
    isNumber(lineHeight) && {lineHeight: getSize.m(lineHeight)},
    {fontSize: getSize.m(size)},
    {fontFamily: Fonts.fontFamily[customFont]},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <Text allowFontScaling={false} style={textStyle} {...textProps}>
      {props.children}
    </Text>
  );
};

export default Typography;
