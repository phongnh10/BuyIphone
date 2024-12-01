import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import colors from '../../Styles/colors';

const Myoders = () => {
  const navigation = useNavigation();

  const orders = [
    {
      id: '1',
      orderNumber: '123456789',
      date: '20/03/2020',
      quantity: 3,
      price: '100.000.000đ',
      status: 'Đã giao hàng',
    },
    {
      id: '2',
      orderNumber: '123456789',
      date: '20/03/2020',
      quantity: 3,
      price: '100.000.000đ',
      status: 'Đã giao hàng',
    },
    {
      id: '3',
      orderNumber: '123456789',
      date: '20/03/2020',
      quantity: 3,
      price: '100.000.000đ',
      status: 'Đã giao hàng',
    },
    {
      id: '4',
      orderNumber: '123456789',
      date: '20/03/2020',
      quantity: 3,
      price: '100.000.000đ',
      status: 'Đã giao hàng',
    },
    {
      id: '5',
      orderNumber: '123456789',
      date: '20/03/2020',
      quantity: 3,
      price: '100.000.000đ',
      status: 'Đã giao hàng',
    },
  ];

  const renderOrder = ({item}) => (
    <View style={styles.orderItem}>
      <View style={styles.dateOder}>
        <Text style={styles.orderText1}>Đơn hàng {item.orderNumber}</Text>
        <Text style={styles.orderText}>{item.date}</Text>
      </View>
      <View style={styles.dateOder1}>
        <View style={styles.oderView}>
          <Text style={styles.orderText}>Số lượng: {item.quantity}</Text>
          <Text style={styles.orderText}>Tổng tiền: {item.price}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
        <Text style={styles.detailsButton}>Chi tiết</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconTim}>
        <Image
          source={require('../../Media/icon/icon_back.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Tìm đơn hàng"
          placeholderTextColor="white"
        />
      </View>
      <FlatList
        scrollEnabled={false}
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20,
  },
  orderItem: {
    backgroundColor: colors.Black_White05,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical:10,
    marginVertical: 8,
  },
  orderText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  orderText1: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  status: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateOder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oderView: {
    justifyContent: 'flex-start',
  },
  dateOder1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    position: 'relative',
  },
  iconHeader: {
    position: 'absolute',
    left: 0,
  },
  textTim: {
    color: 'white',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  iconTim: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 5,
    width: '100%',
    height: 52,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 12,
  },
});

export default Myoders;
