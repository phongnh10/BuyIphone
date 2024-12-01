import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Styles/colors';
const {width: screenWidth} = Dimensions.get('window');

const Detail = ({route, navigation}) => {
  const [indexIma, setIndexIma] = useState(0);
  const {sp} = route.params;
  console.log(sp);
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            let i = indexIma + 1;
            setIndexIma(i > 2 ? 0 : i);
          }}>
          <Image
            style={styles.img_iphone}
            // source={require('../../Media/image/iPhone16ProMax.png')}
            source={{uri: sp.image[indexIma]}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{padding:20}}>
          <Text style={styles.text_iphone}>{sp.name}</Text>
          <View style={styles.view_price_quantity}>
            <Text style={styles.text_price}>{sp.price} đ</Text>
            <View style={styles.view_quantity}>
              <TouchableOpacity>
                <Image
                  style={styles.ic_plus}
                  source={require('../../Media/icon/Plus.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>01</Text>
              <TouchableOpacity>
                <Image
                  style={styles.ic_minus}
                  source={require('../../Media/icon/Minus.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Review');
            }}>
            <View style={{flexDirection:'row', alignItems:'center',marginBottom:20}}>
              <Image
              style={styles.ic_minus}
              source={require('../../Media/icon/icon_star.png')}
              resizeMode="contain"
              />
              <Text style={styles.text_rate}>4.5 (50 rewiews)</Text>
            </View>
            
          </TouchableOpacity>
          <Text style={styles.text_mota}>Mô tả:</Text>
          <Text style={styles.text_motachitiet}>{sp.describe}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            ToastAndroid.show('Login successful', ToastAndroid.SHORT);
          }}>
          <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

      {/* back */}
      <View style={styles.buttonBack}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.img_back}
            source={require('../../Media/icon/icon_button_arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
  },
  img_iphone: {
    width: screenWidth * 1,
    height: screenWidth * 1,
  },
  text_iphone: {
    color: colors.Grey_White,
    fontSize: screenWidth * 0.06,
  },
  text_price: {
    color: 'white',
    fontSize: screenWidth * 0.07,
    fontWeight: 'bold',
    marginTop:10
  },
  ic_plus: {
    height: screenWidth * 0.07,
    width: screenWidth * 0.07,
  },
  ic_minus: {
    height: screenWidth * 0.07,
    width: screenWidth * 0.07,
  },
  quantity: {
    fontSize: screenWidth * 0.05,
    color: 'white',
    marginHorizontal: 20,
  },
  text_rate: {
    fontSize: screenWidth * 0.05,
    color: 'white',
    marginLeft:5
  },
  text_mota: {
    fontSize: screenWidth * 0.05,
    color: 'white',
    marginBottom: 10,
  },
  text_motachitiet: {
    fontSize: screenWidth * 0.04,
    color: colors.Grey_White,
    marginBottom:100
  },
  view_price_quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  view_quantity: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
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

  buttonBack: {
    position: 'absolute',
    left: 20,
    top: 0,
    alignSelf: 'center',
  },
  img_back: {
    width: screenWidth * 0.1,
  },
});

export default Detail;
