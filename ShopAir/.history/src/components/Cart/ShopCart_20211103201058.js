import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

 const ShopCart = () => {
    return (
        <View>
            <View style={Styles.header}></View>
            <View style={Styles.body}></View>
            <View style={Styles.foot}></View>
        </View>
    )
}
export default ShopCart;
export const Styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'7%',
        backgroundColor:'green',
    },
    body: {
        width:'100%',
        height:'86%',
        backgroundColor:'red',
    },
    foot:{
        width:'100%',
        height:'7%',
        backgroundColor:'gray',
    }
})
