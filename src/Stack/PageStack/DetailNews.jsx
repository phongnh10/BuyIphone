import { View, Text, StyleSheet, Image, TextInput, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../Styles/colors'
const { width: screenWidth } = Dimensions.get('window');

const DetailNews = () => {


    const [search, setSearch] = React.useState('');
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.tintuc_text_date}>
                  11/11/2024
            </Text>
            <Text style={styles.tintuc_text_title}>
            Tính năng AI trên iPhone 16: Những gì bạn cần biết
            </Text>
            <View style={styles.view_tintuc_image}>
              <Image
                style={styles.tintuc_image}
                source={require('../../Media/image/Thumbnails_News_1.webp')}
                //resizeMode="contain"
              />
            </View>
            <Text style={styles.tintuc_text_des_1}>
            Gần đây, Apple đã công bố ngày tổ chức Hội nghị các nhà phát triển toàn cầu (WWDC24),  nơi hãng sẽ chia sẻ thông tin mới về hệ điều hành của mình. Theo nhiều  nguồn tin, có khả năng Apple sẽ giới thiệu một số tính năng AI mới cho dòng iPhone 16, nhằm cạnh tranh với các thiết bị Android như Galaxy S24 và Pixel 8.  Dưới đây là những tính năng AI mà người dùng mong đợi sẽ được bổ sung  trên iPhone 16.
            </Text>
            <Text style={styles.tintuc_text_des_2}>
            Siri sẽ tích hợp AI tạo sinh
            </Text>
            <View style={styles.view_tintuc_image_2}>
              <Image
                style={styles.tintuc_image_2}
                source={require('../../Media/image/image_detail_news_2.png')}
                //resizeMode="contain"
              />
            </View>
            
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.Primary,
        paddingHorizontal:screenWidth *0.05,
        
    },
    tintuc_text_date:{
        marginTop:20,
        marginBottom:10,
        color:colors.Text_Secondary
    },
    tintuc_text_title:{
        color: colors.White,
        marginBottom:20,
        fontSize: screenWidth *0.05
    },
    tintuc_text_des_1:{
        marginTop:10,
        color:colors.Text_Secondary
    },
    tintuc_text_des_2:{
        color:colors.White,
        marginTop:10,
        fontSize: screenWidth *0.04
    },
    view_img_text:{
        marginHorizontal:screenWidth *0.05,
        flexDirection:'row',
        borderColor:'white',
        borderWidth:1,
        borderRadius:100,
        paddingHorizontal:20,
        marginVertical:10,
        alignItems:'center'
      },
    tintuc_image:{
        width: screenWidth *0.9,
        height: screenWidth *0.55,
        borderRadius:20,
        backgroundColor:'red'
    },
    tintuc_image_2:{
        marginTop:10,
        width: screenWidth *0.9,
        //height: screenWidth *0.55,
        borderRadius:20,
        backgroundColor:'red',
        marginBottom:20
    },
  
})

export default DetailNews