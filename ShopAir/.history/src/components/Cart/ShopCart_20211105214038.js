import React, { useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TagNameScreens from '../../contexts/TagNameScreens';
export const back = require('../../assets/icons/back_icon.png');


const data = [
    {
        id: 1,
        title: 'Nike Bag',
        price: '1,999,999'
    },
]



const ShopCart = ({navigation}) => {

    // const handleSub = useCallback(() => {
    //     if (quali > 1) {
    //         setQuali(quali - 1);
    //     }
    // }, [quali]);
    // const handleSum = useCallback(() => {
    //     setQuali(quali + 1);
    // }, [quali]);
    // const [quali, setQuali] = useState(1);


    const renderItem = ({ item }) => <Item title={item.title} img={item.img} price={item.price} />;
    const Item =({title, img, price}) => {
    const [count, setCount] = useState(1);
        const onPress = () => setCount(prevCount => prevCount + 1);
        const incrementCount = () => setCount(count + 1);
        const decrementCount = () => {
            if (count === 1) {
                return setCount(1);
            }
            return setCount(count - 1);
        }
    return (
        <View>
            <View style={Styles.header}>
                <View style={Styles.left}>
                    <Image style={{ width: 20, height: 20 }} source={back} />
                </View>
                <View style={Styles.mid}>
                    <Text style={{ fontSize: 20 }}>Thanh Toán</Text>
                </View>
                <View style={Styles.left} />
            </View>
            <View style={Styles.body}>
                {/* -------------------------------------------------------------------- */}
                <View style={{ width: '100%', height: 100, backgroundColor: '#EAF6FF', flexDirection: 'row' }}>
                    <Image style={{ width: 20, height: 30, marginTop: 15, marginLeft: 10, }} 
                    source={{uri: 'https://chungcucarillon.vn/wp-content/uploads/2021/08/icon-vi-tri-carillon-7.png'}} />
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
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ width: '100%', height: 200, alignItems: 'center', backgroundColor: 'white', }}>
                                    <View style={{ width: '95%', height: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16, }}>NightMore.heartshop.com</Text>
                                        <Text style={{ fontSize: 16, }}>Chi tiết sản phẩm</Text>
                                    </View>
                                    <View style={{ width: '95%', height: '60%', backgroundColor: 'white', flexDirection: 'row', }}>
                                        <View style={{ width: '25%', height: '100%' }}>
                                            <Image style={{ width: 100, height: 100 }}
                                                source={{uri: 'https://cf.shopee.vn/file/311918633451d5d5e9da52ecb7aef296'}} />
                                        </View>
                                        <View style={{ width: '75%', height: '100%', marginLeft: 20 }}>
                                            <Text style={{ fontSize: 40, }}>{item.title}</Text>
                                            {/* <Text style={{ fontSize: 20, }}>{item.price*(count)}</Text> */}
                                            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
                                                {price * count}$
                                            </Text>
                                            <View style={{ width: '95%', height: '20%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop:5}}>
                                                <TouchableOpacity onPress={decrementCount}>
                                                    <View style={{ backgroundColor: 'white' }}>
                                                        <Text style={{ fontSize: 30, }}>-</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                                                    <Text fontType="bold" size={30} center>
                                                        {count}
                                                    </Text>
                                                </View>
                                                <TouchableOpacity onPress={incrementCount}>
                                                    <View style={{ backgroundColor: 'white' }}>
                                                        <Text style={{ fontSize: 30, }}>+</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <View style={{ width: '100%', height: 100, backgroundColor: 'white', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: '30%', backgroundColor: 'white' }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 10, }} 
                            source={{uri: 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-cash-in-hand-icon-cartoon-style-png-image_1893442.jpg'}} />
                            <Text style={{ fontSize: 20, color: '#00C0FF' }}>PHƯƠNG THỨC THANH TOÁN</Text>
                        </View>
                        <View style={{ height: '70%', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, marginLeft: 50, }}>Thanh toán bằng tiền mặt</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 100, backgroundColor: '#EAF6FF', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: '30%', backgroundColor: '#EAF6FF', marginLeft: 20 }}>
                            <Text style={{ fontSize: 20, color: '#00C0FF' }}>PHƯƠNG THỨC VẬN CHUYỂN</Text>
                        </View>
                        <View style={{ height: '70%', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 15, marginLeft: 30, }}>Vận chuyển nhanh</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text style={{ fontSize: 15, marginLeft: 30, }}>J&T Express</Text>
                                <Text style={{ fontSize: 15, marginLeft: 30, marginRight:30}}>20,000{'₫'}</Text>
                            </View>
                            <Text style={{ fontSize: 15, marginLeft: 30, }}>Nhận hàng vào thứ 14 Th10 - 12 Th 12</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={Styles.foot}>
                <View style={{ width: '60%', height: '100%', justifyContent: 'center', marginRight: 5 }}>
                    <Text style={{ textAlign: 'right', }}>Tổng tiền: 2,019,999{'₫'}</Text>
                </View>
                <TouchableOpacity style={{ width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}
                 onPress={() => navigation.navigate(TagNameScreens.Successfuly)}>
                    <Text style={{ color: 'white' }}>ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}
export default ShopCart;
export const Styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
    },
    text1: {
        fontSize: 16,
        marginLeft: 10,
    },
    left: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mid: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
