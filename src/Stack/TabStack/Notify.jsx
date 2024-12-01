import { StyleSheet, Text, View, Image, FlatList, ScrollView,Dimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../../Styles/colors';
const {width: screenWidth} = Dimensions.get('window');
const Notify = () => {
    const [ListNotify, setListNotify] = useState([
        { id: 1, image: require('../../Media/image/Logo_App_3.png'), content: 'Đơn hàng #123456789 của bạn đã được xác nhận', date: "18:00", state: "Thành công" },
        { id: 2, image: require('../../Media/image/Logo_App_3.png'), content: 'Đơn hàng #123456789 của bạn đã được vận chuyển', date: "20/11/2024", state: "Thành công" },
    ])

    const renderNotify = ({ item }) => {
        const { image, content, date, state } = item;
        return (
            <View style={styles.boder} >
                <Image style={styles.logo} source={image} />
                <View style={{paddingHorizontal:0}}>
                    <Text style={styles.text}>{content} <Text style={styles.successText}>{state}</Text></Text>
                    <Text style={styles.time}>{date}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textThongBao} >Thông báo</Text>
            </View>
            <View>
                <Text style={styles.textHomNay}>Hôm nay</Text>
            </View>
            <FlatList
                            scrollEnabled={false}

                data={ListNotify}
                renderItem={renderNotify}
                keyExtractor={item => item.id} />
            <View>
                <Text style={styles.textHomNay}>Hôm qua</Text>
            </View>
            <FlatList
                scrollEnabled={false}
                data={ListNotify}
                renderItem={renderNotify}
                keyExtractor={item => item.id} />
            <View>
                <Text style={styles.textHomNay}>7 Ngày Trước</Text>
            </View>
            <FlatList
                            scrollEnabled={false}

                data={ListNotify}
                renderItem={renderNotify}
                keyExtractor={item => item.id} />
        </ScrollView>
    )
}

export default Notify

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        paddingHorizontal: 20
    },
    textThongBao: {
        color: 'white',
        fontSize: screenWidth * 0.05,
        marginTop: 10,
        fontWeight: 'bold'
    },
    textHomNay: {
        color: 'white',
        fontSize: screenWidth * 0.04,
        marginTop: 20,
        fontWeight: 'bold'

    },
    logo: {
        width: 48,
        height: 48,
    },
    text: {
        color: colors.White,
        fontSize: screenWidth * 0.04,
        marginLeft: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        marginRight: 20,
    },
    successText: {
        color: 'green',
    },
    time: {
        fontSize: screenWidth * 0.04,
        color: 'white',
        marginLeft: 3,
        paddingHorizontal: 12,
        marginTop: 5
    },

    boder: {
        backgroundColor: colors.Black_White05,
        padding:10,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical:10,
        alignItems:'center'
    }
})