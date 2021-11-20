import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Badge} from 'react-native-elements';
import Block from '@components/Block';
import {getSize} from 'helper/responsive';
import {Colors, Sizes, icons, Fonts} from '@assets';

export const MyBottomTab = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Block
      row
      paddingTop={10}
      shadow
      backgroundColor={Colors.white}
      paddingBottom={Platform.OS === 'ios' ? bottom : 10}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.trademark
            : index === 2
            ? icons.favorire
            : index === 3
            ? icons.notification
            : icons.user;

        const iconSelect =
          index === 0
            ? icons.home
            : index === 1
            ? icons.trademark
            : index === 2
            ? icons.favorire_selected
            : index === 3
            ? icons.notification_selected
            : icons.user_selected;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonContainer}>
              {index === 3 && (
                <Badge
                  status="error"
                  containerStyle={styles.notificationContainer}
                  textProps={{allowFontScaling: false}}
                  value="3"
                />
              )}
              <Image
                source={isFocused ? iconSelect : icon}
                style={styles.iconStyle(isFocused)}
              />
              <Text style={styles.textLabel(isFocused)}>{label}</Text>
            </TouchableOpacity>
          </>
        );
      })}
    </Block>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 2,
    elevation: 4,
  },
  textLabel: (isFocused) => ({
    color: isFocused ? Colors.black : Colors.lightGray,
    marginTop: 5,
    fontSize: 10,
    fontFamily: Fonts.Roboto_Regular,
  }),
  iconStyle: (isFocused) => ({
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: isFocused ? Colors.black : Colors.lightGray,
  }),
  notificationContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(21),
  },
});
