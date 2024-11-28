import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../Styles/colors'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Review = () => {
    const [danhgia, setDanhgia] = React.useState('');

    const datadanhgia= [
        {id:1, img:require('../../Media/image/profile_avatar.jpg'), name: 'Brunal Ronaldo',date:'20/11/2024',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
        {id:2, img:require('../../Media/image/profile_avatar.jpg'), name: 'Mesi',date:'09/07/2020',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
        {id:3, img:require('../../Media/image/Logo_App.png'), name: 'Malado',date:'14/12/2018',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
        {id:4, img:require('../../Media/image/profile_avatar.jpg'), name: 'Kho khang',date:'31/12/2023',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
        {id:5, img:require('../../Media/image/profile_avatar.jpg'), name: 'Phat',date:'20/11/2024',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
        {id:6, img:require('../../Media/image/profile_avatar.jpg'), name: 'Brunal Ronaldo',date:'20/11/2024',cmt:'Nice iPhone with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'},
    ]

    return (
    <ScrollView style={styles.container} vertical>
        <View style={styles.buttonBack}>
            <TouchableOpacity style={styles.back}>
            <Image
                style={styles.img_back}
                source={require('../../Media/icon/icon_arrow_left.png')}
                resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
        <View style={styles.view_carttext}>
            <Text style={styles.carttext}>Đánh giá</Text>
        </View>
        
        <View style={styles.item}>
            <Image
            style={styles.item_image}
            source={require('../../Media/image/iPhone16ProMax.png')}
            resizeMode="contain"
            />
            <View style={styles.item_text_NPQ}>
            <Text style={styles.item_text_name}>
                iPhone 16 Pro Max
            </Text>
            <View style={styles.view_img_text_star}>
                <Image style={styles.view_img_star}
                    source={require('../../Media/icon/icon_star.png')}
                    resizeMode="contain"
                />
                <Text style={styles.item_text_star}>
                    4.5
                </Text>
            </View>
            
            <Text style={styles.item_text_review}>
                50 reviews
            </Text>
            </View>
        </View>
        <View style={styles.ngang}></View>
        <TextInput
          style={styles.input_danhgia}
          onChangeText={setDanhgia}
          value={danhgia}
          placeholderTextColor= {colors.Grey_White}
          placeholder="Hãy đánh giá sản phẩm"
        />

        <FlatList
        nestedScrollEnabled
        data={datadanhgia}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.danhgiachung}
        renderItem={({ item }) => (
            <View style={styles.view_cmt}>
                <View style={styles.view_cmt_avt_name}>  
                    <Image style={styles.view_cmt_avt}
                        source={item.img}
                        //resizeMode="contain"
                    />
                
                    <View style={styles.view_cmt_text}>
                        <Text style={styles.view_cmt_text_name}>
                            {item.name}
                        </Text>
                        <View style={styles.view_cmt_text_view_star}>
                            <Image style={styles.view_cmt_text_view_star_img}
                            source={require('../../Media/icon/icon_star.png')}
                            resizeMode="contain"
                            />
                            <Image style={styles.view_cmt_text_view_star_img}
                            source={require('../../Media/icon/icon_star.png')}
                            resizeMode="contain"
                            />
                            <Image style={styles.view_cmt_text_view_star_img}
                            source={require('../../Media/icon/icon_star.png')}
                            resizeMode="contain"
                            />
                            <Image style={styles.view_cmt_text_view_star_img}
                            source={require('../../Media/icon/icon_star.png')}
                            resizeMode="contain"
                            />
                            <Image style={styles.view_cmt_text_view_star_img}
                            source={require('../../Media/icon/icon_star.png')}
                            resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.view_cmt_text_danhgia}>
                    {item.cmt}
                </Text>
                <Text style={styles.date}>
                    {item.date}
                </Text>
            </View>
        )}
        />
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.Primary,
        padding:20
    },
    buttonBack:{
        position: 'absolute',
        left:20,
        top:0,
        alignSelf: 'center',
    },
    img_back:{
        height:screenWidth *0.1,
        width: screenWidth *0.1,
    },
    view_carttext:{
        alignItems:'center',
        justifyContent:'center'
    },
    carttext:{
        fontSize: screenWidth*0.08,
        color:colors.White,
    },
    item:{
        flexDirection:'row',
        marginVertical:20,
        
      },
      item_image:{
        height: screenWidth *0.35,
        width: screenWidth *0.35,
      },
      item_text_NPQ:{
        marginLeft:10,
        
      },
      item_text_name:{
        color:colors.Grey_White,
        fontSize:screenWidth*0.05,
      },
      item_text_star:{
        color:colors.White,
        fontSize:screenWidth*0.06,
        marginLeft:10
      },
      item_text_review:{
        color:colors.White,
        fontSize:screenWidth*0.05,
        marginTop:10
      },
    view_img_text_star:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    ngang:{
        borderBottomColor:colors.Grey_White,
        borderBottomWidth:1
    },
    input_danhgia:{
        color:'white',
        fontSize:screenWidth * 0.04,
        alignItems:'center',
        marginLeft:10,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        marginVertical:20,
        paddingHorizontal:20,
        height: screenWidth * 0.11, 
    },
    view_cmt:{
        backgroundColor: colors.Secondary,
        borderRadius:10,
        padding:10,
        marginBottom:20
    },
    view_cmt_avt_name:{
        flexDirection:'row'
    },
    view_cmt_avt:{
        width: screenWidth *0.1,
        height: screenWidth *0.1,
        marginRight:10,
        borderRadius:1000
    },
    view_cmt_text_name:{
        color:'white',
        fontWeight:'bold'
    },
    view_cmt_text_view_star:{
        flexDirection:'row'
    },
    view_cmt_text_view_star_img:{
        width: screenWidth *0.04,
        height: screenWidth *0.04,
        marginRight:3,
    },
    view_cmt_text_danhgia:{
        color:'white',
        marginTop:10
    },
    date:{
        color:'white',
        position: 'absolute',
    right: 10,
    top: 10,
    },
    danhgiachung:{
        flexDirection:'column',
    }
})

export default Review