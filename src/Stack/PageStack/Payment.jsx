import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {UserContext} from '../../AppContext/UserContex';
import {ChangeNum} from '../../Helper/Utils';

const Payment = ({navigation, route}) => {
  const {totalPrice} = route.params;
  const {order, setOrder} = useContext(UserContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            resizeMode="center"
            style={styles.logoback}
            source={require('../../Media/icon/icon_arrow_left.png')}
          />
        </TouchableOpacity>
        Thanh toán
      </Text>
      <View style={styles.recipientInfo}>
        <Image
          style={styles.logopen}
          source={require('../../Media/icon/icon_pen.png')}
        />
        <Text style={styles.label}>Thông tin người nhận</Text>
        <Text style={styles.text}>Thach Nguyen Phuong Trang</Text>
        <Text style={styles.text}>(+84)0920201998</Text>
        <Text style={styles.text}>GoVap, P10, HCM</Text>
      </View>

      <View style={styles.paymentMethods}>
        <Text style={styles.label}>Phương thức thanh toán</Text>
        <RadioButton.Group
          onValueChange={value => setSelectedPaymentMethod(value)}
          value={selectedPaymentMethod}>
          <View style={styles.radioButton}>
            <RadioButton value="momo" />
            <Text style={styles.text}>Momo</Text>
            <Image
              style={styles.logop}
              source={require('../../Media/icon/icon_momo.png')}
            />
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="zalopay" />
            <Text style={styles.text}>ZaloPay</Text>
            <Image
              style={styles.logop}
              source={require('../../Media/icon/icon_zalopay.png')}
            />
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="cash" />
            <Text style={styles.text}>Tiền mặt</Text>
            <Image
              style={styles.logop}
              source={require('../../Media/icon/icon_money.png')}
            />
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.orderDetails}>
        <Text style={styles.text}>Đơn hàng: {ChangeNum(totalPrice)}</Text>
        <Text style={styles.text}>Vận chuyển: 500.000 đ</Text>
        <Text style={styles.total}>
          Tổng tiền: {ChangeNum(totalPrice + 500000)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          setOrder([]);
          Alert.alert('Thanh Toán Thành Công', 'Cảm ơn bạn đã mua hàng!');
          navigation.goBack();
        }}>
        <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  logoback: {width: 25, height: 25},
  recipientInfo: {
    marginBottom: 20,
  },
  logopen: {
    position: 'absolute',
    top: 15,
    end: 1,
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  paymentMethods: {
    flex: 1,
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logop: {
    width: 24,
    height: 24,
    marginStart: 10,
  },
  orderDetails: {
    marginBottom: 20,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00f',
  },
  confirmButton: {
    backgroundColor: '#00f',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Payment;
