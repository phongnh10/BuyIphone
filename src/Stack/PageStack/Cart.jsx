import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Date,
} from 'react-native';
import React, {useContext} from 'react';
import colors from '../../Styles/colors';
import {UserContext} from '../../AppContext/UserContex';
import {ChangeNum} from '../../Helper/Utils';

const {width: screenWidth} = Dimensions.get('window');

const Cart = ({navigation}) => {
  const {order, setOrder} = useContext(UserContext);

  const calculateTotalPriceWithFilter = orders => {
    return orders
      .filter(order => order.price != null && order.price !== '')

      .reduce(
        (total, order) => total + parseFloat(order.price * order.quantity),
        0,
      );
  };

  const handleRemoveItem = itemToRemove => {
    setOrder(prevOrders =>
      prevOrders.filter(order => order.name !== itemToRemove.name),
    );
  };
  const totalPrice = calculateTotalPriceWithFilter(order);
  return (
    <View style={styles.container}>
      {order == null || order.length == 0 ? (
        <View>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              marginTop: 50,
            }}>
            Bạn chưa có đơn hàng nào
          </Text>
        </View>
      ) : (
        <FlatList
          nestedScrollEnabled
          data={order}
          keyExtractor={item => item.name + item.quantity}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image
                style={styles.item_image}
                source={{uri: item.image}}
                resizeMode="contain"
              />
              <View style={styles.item_text_NPQ}>
                <Text style={styles.item_text_name}>{item.name}</Text>
                <Text style={styles.item_text_price}>
                  {ChangeNum(item.price)}
                </Text>
                <View style={styles.item_view_quantity}>
                  <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
                </View>
              </View>
              <View style={styles.button_delete}>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => {
                    handleRemoveItem(item);
                  }}>
                  <Image
                    style={styles.img_delete}
                    source={require('../../Media/icon/icon_delete.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      {order.length > 0 ? (
        <View style={styles.buttonContainer}>
          <View style={styles.text_tongtien}>
            <Text style={styles.text_tongtien1}>Tổng tiền</Text>
            <Text style={styles.text_tongtien2}>{ChangeNum(totalPrice)}</Text>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => {
              navigation.navigate('Payment', {totalPrice});
            }}>
            <Text style={styles.buttonText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
  },
  flatlist: {
    paddingBottom: 130,
  },
  buttonBack: {
    position: 'absolute',
    left: 20,
    top: 20,
    alignSelf: 'center',
  },
  img_back: {
    height: screenWidth * 0.1,
    width: screenWidth * 0.1,
  },
  view_carttext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carttext: {
    fontSize: screenWidth * 0.08,
    color: colors.White,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  item_image: {
    height: screenWidth * 0.35,
    width: screenWidth * 0.35,
  },
  item_text_NPQ: {
    marginLeft: 10,
  },
  item_text_name: {
    color: colors.Grey_White,
    fontSize: screenWidth * 0.05,
  },
  item_text_price: {
    color: colors.White,
    fontSize: screenWidth * 0.06,
  },
  item_view_quantity: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    marginTop: 20,
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
  button_delete: {
    position: 'absolute',
    right: 40,
    top: 60,
  },
  img_delete: {
    height: screenWidth * 0.05,
    width: screenWidth * 0.05,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    alignSelf: 'center',
    backgroundColor: colors.Primary,
  },
  addToCartButton: {
    backgroundColor: colors.Point_Color,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: colors.White,
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
  },
  text_tongtien: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginHorizontal: 20,
  },
  text_tongtien1: {
    color: colors.White,
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
  },
  text_tongtien2: {
    color: colors.Point_Color,
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
  },
});
export default Cart;
