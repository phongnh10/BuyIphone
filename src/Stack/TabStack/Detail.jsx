import { View, Text, StyleSheet,Image, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../Styles/colors'
const { width: screenWidth } = Dimensions.get('window');

const Detail = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img_iphone}
        source={require('../../Media/image/iPhone16ProMax.png')}
        resizeMode="contain"
      />
      <Text style={styles.text_iphone}>
        iPhone 16 Pro Max
      </Text>
      <View style={styles.view_price_quantity}>
        <Text style={styles.text_price}>
          36.500.000đ
        </Text>
        <View style={styles.view_quantity}>
          <TouchableOpacity>
            <Image
              style={styles.ic_plus}
              source={require('../../Media/icon/Plus.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.quantity}>
            01
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.ic_minus}
              source={require('../../Media/icon/Minus.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        
      </View>
      {/* <Image
        style={styles.ic_minus}
        source={require('../../Media/icon/Star.png')}
        resizeMode="contain"
      /> */}
      <Text style={styles.text_rate}>
        4.5   (50 rewiews)
      </Text>
      <Text style={styles.text_mota}>
        Mô tả:
      </Text>
      <Text style={styles.text_motachitiet}>
      Mẫu cao cấp nhất của dòng iPhone 16, trang bị màn hình OLED lớn với viền siêu mỏng, chip A18 Pro cực mạnh và hệ thống camera đột phá với khả năng zoom quang học xa hơn. Thiết kế titan bền bỉ, thời lượng pin kéo dài, mang đến trải nghiệm tối ưu cho người dùng chuyên nghiệp.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBack}>
        <TouchableOpacity style={styles.back}>
          <Image
            style={styles.img_back}
            source={require('../../Media/icon/icon_button_arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    padding:20
  },
  img_iphone:{
    width: screenWidth * 1,
    height:screenWidth * 0.7
  },
  text_iphone:{
    color: colors.Grey_White,
    fontSize: screenWidth * 0.06,
    marginTop:20
  },
  text_price:{
    color:'white',
    fontSize: screenWidth * 0.07,
    fontWeight:'bold'
  },
  ic_plus:{
    height: screenWidth *0.07,
    width: screenWidth *0.07,
  },
  ic_minus:{
    height: screenWidth *0.07,
    width: screenWidth *0.07,
  },
  quantity:{
    fontSize: screenWidth * 0.05,
    color:'white',
    marginHorizontal:20
  },
  text_rate:{
    fontSize: screenWidth * 0.05,
    color:'white',
    marginBottom:20
  },
  text_mota:{
    fontSize: screenWidth * 0.05,
    color:'white',
    marginBottom:10,
  },
  text_motachitiet:{
    fontSize: screenWidth * 0.04,
    color:colors.Grey_White
  },
  view_price_quantity:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20
  },
  view_quantity:{
    flexDirection:'row-reverse',
    alignItems:'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: screenWidth - 40,
    alignSelf: 'center',
  },
  addToCartButton: {
    backgroundColor: colors.Point_Color,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.White,
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
  },

  buttonBack:{
    position: 'absolute',
    left:20,
    top:20,
    alignSelf: 'center',
  },
  img_back:{
    width: screenWidth *0.1,
  }
})


export default Detail;