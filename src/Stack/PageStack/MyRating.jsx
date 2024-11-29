import { StyleSheet, Text, View, FlatList, Image, Array, ScrollView } from 'react-native'
import React from 'react'


const MyRating = () => {

    const reviews = [
        {
            id: '1',
            image: 'https://via.placeholder.com/100',
            name: 'iPhone 16 Plus',
            price: '36.500.000đ',
            rating: 5,
            review:
                'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
            date: '20/03/2020',
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/100',
            name: 'iPhone 16 Plus',
            price: '36.500.000đ',
            rating: 5,
            review:
                'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
            date: '20/03/2020',
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/100',
            name: 'iPhone 16 Plus',
            price: '36.500.000đ',
            rating: 5,
            review:
                'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
            date: '20/03/2020',
        },
    ];
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.View1}>
            <Image source={require('../../Media/image/iPhone16Plus.png')} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.rating}>
                    <Image source={require('../../Media/icon/icon_stars.png')} style={styles.image} />
                </View>
            </View>
            </View>
            <Text style={styles.review}>{item.review}</Text>
            <View style={styles.TextDate}>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (

        <ScrollView style={styles.container}>
            <View style={styles.Header}>
                <Image source={require('../../Media/icon/icon_vector.png')} style={styles.iconHeader} />
                <Text style={styles.textHeader}> Đánh giá của tôi</Text>
            </View>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        padding: 14,
    },
    card: {
        backgroundColor: '#4A4A4A',
        borderBottomWidth: 10,
        borderRadius: 12,
        padding: 8
    },
    review: {
        color: 'white',
        padding: 10,
        fontSize: 14,
        lineHeight: 20
    },
    date: {
        color: 'white',
        marginBottom: 10,
        marginHorizontal: 10

    },
    TextDate: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    price: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        color: '#B3B3B3',
        fontSize: 16,
    },
    textHeader: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    Header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        position: 'relative'
    },
    iconHeader: {
        position: 'absolute',
        left: 0
    },
    View1: {
        flexDirection: 'row',
        
    },
    info:{
        marginVertical: 29,

    },
    image:{
        marginHorizontal: 10
    },
    rating:{
        marginTop: 10,
        marginLeft: -11
    }
})

export default MyRating