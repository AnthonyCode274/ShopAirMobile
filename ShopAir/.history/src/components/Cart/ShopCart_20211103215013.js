import React from 'react';
import { View , Text, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
export const back = require('../../assets/icons/back_icon.png');

const data =[
    {
        id:1,
        title:'Nike Bag',
        price:'1,999,999'
    },
]

 const ShopCart = () => {
    return (
        <View>
            <View style={Styles.header}>
                <View style={Styles.left}>
                    <Image style={{width:20, height:20}} source={back}/>
                </View>
                <View style={Styles.mid}>
                    <Text style={{fontSize:20}}>Thanh Toan</Text>
                    </View>
                <View style={Styles.left}/>          
            </View>
            <View style={Styles.body}>
            {/* -------------------------------------------------------------------- */}
                <View style={{width:'100%', height:100, backgroundColor:'#EAF6FF', flexDirection:'row'}}>
                    <Image style={{width:20, height:20, marginTop:10, marginLeft:10,}} source={back}/>
                    <View style={{}}>
                        <Text style={Styles.text}>Địa chỉ nhận hàng</Text>
                        <Text style={Styles.text1}>Dương Quốc Thắng | 123456789</Text>
                        <Text style={Styles.text1}>Nhà Bè, Quận 7, TP HCM</Text>
                    </View>
                </View>
                {/* -------------------------------------------------------------------- */}
                    <View>
                    <FlatList
                    data={data}
                    keyExtractor = {item => item.id}
                    renderItem = {({item}) => {
                        return (
                            <View style={{width:'100%', height:200, alignItems: 'center', backgroundColor:'white', shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                    
                            elevation: 7,}}>
                            <View style={{width:'95%', height:'20%', flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:16,}}>NightMore.heartshop.com</Text>
                                <Text style={{fontSize:16,}}>Chi tiết sản phẩm</Text>
                            </View>
                            <View style={{width:'95%', height:'80%',backgroundColor:'white', flexDirection:'row',}}>
                                <View style={{width:'25%', height:'100%'}}>
                                    <Image style={{width:100, height:100}} source={back}/>
                                </View>
                                <View style={{width:'75%', height:'100%'}}>
                                    <Text style={{fontSize:40,}}>{item.title}</Text>
                                    <Text style={{fontSize:20,}}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                        )
                    }}
                    />
                     <View style={{width:'100%', height:100, backgroundColor:'#EAF6FF', marginTop:10}}>
                    <View style={{flexDirection:'row', alignItems: 'center',width:'100%',height:'30%',backgroundColor:'white'}}>
                    <Image style={{width:20, height:20, marginLeft:10,}} source={back}/>
                    <Text style={{fontSize:20, color:'#00C0FF'}}>PHƯƠNG THỨC THANH TOÁN</Text>
                    </View>
                    <View style={{height:'70%', justifyContent:'center'}}>
                        <Text style={{fontSize:15, marginLeft:30,}}>Thanh toán bằng tiền mặt</Text>
                    </View>
                    </View>
                    </View>
               
            </View>
            <View style={Styles.foot}></View>
        </View>
    )
}
export default ShopCart;
export const Styles = StyleSheet.create({
    text:{
        fontSize:16,
        marginLeft:10,
        marginTop:10,
    },
    text1:{
        fontSize:16,
        marginLeft:10,
    },
    left:{
        width:'15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mid:{
        width:'70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        width:'100%',
        height:'7%',
        backgroundColor:'white',
        flexDirection:'row',
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
        width:'100%',
        height:'86%',
       
    },
    foot:{
        width:'100%',
        height:'7%',
        backgroundColor:'gray',
    }
})
