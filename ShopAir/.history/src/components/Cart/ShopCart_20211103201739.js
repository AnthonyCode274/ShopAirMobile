import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

 const ShopCart = () => {
    return (
        <View>
            <View style={Styles.header}>
                <View style={Styles.left}></View>
                <View style={Styles.mid}>
                    <Text>
                    Thanh Toan
                    </Text>
                    </View>
                <View style={Styles.left}/>          
            </View>
            <View style={Styles.body}></View>
            <View style={Styles.foot}></View>
        </View>
    )
}
export default ShopCart;
export const Styles = StyleSheet.create({
    left:{
        width:'15%',
    },
    mid:{
        width:'70%',
    },
    header:{
        width:'100%',
        height:'7%',
        backgroundColor:'green',
        flexDirection:'row',
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
