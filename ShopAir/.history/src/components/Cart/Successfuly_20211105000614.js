import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';


const Successfuly = () => {
    return (
        <View>
            <View style={Styles.header}>
                <View>
                    
                </View>
                <View >
                    <Text style={{ fontSize: 20 }}>Thanh Toán</Text>
                </View>
                <View  />
            </View>
            <View >

            </View>
            <View style={Styles.foot}>
            </View>
        </View>
    )
}
export default Successfuly;
export const Styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    body: {
        width: '100%',
        height: '86%',

    },
    foot: {
        width: '100%',
        height: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',

    }
})
