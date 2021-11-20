/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const SlideDetailsImage = ({data, onPressItem}) => {
  const SildeImage = ({item}) => {
    return (
      <TouchableOpacity onPress={onPressItem}>
        <Image
          source={{uri: item.image}}
          style={{
            resizeMode: 'center',
            width: 64,
            height: 64,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={SildeImage}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default SlideDetailsImage;

const styles = StyleSheet.create({});
