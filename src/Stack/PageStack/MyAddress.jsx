import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MyAddress = () => {
  const navigation = useNavigation();

  const address = [
    {
      id: '1',
      name: 'Thạch Nguyễn Phương Trang',
      phone: '(+84)0920021998',
      address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
    },
  ];

  const renderAddress = ({item}) => (
    <View style={styles.addressItem}>
      <View style={styles.dateOder}>
        <Text style={styles.addressText1}>{item.name}</Text>
        <Text style={styles.adressText}>{item.phone}</Text>
      </View>
      <View>
        <View>
          <Text style={styles.adressText2}>{item.address}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.detailsButton}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.Header}>
            <Image
              source={require('../../Media/icon/icon_vector.png')}
              style={styles.iconHeader}
            />
            <Text style={styles.textHeader}>Địa chỉ nhận hàng</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.TextHead}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.TextQuenMatKhau}></Text>
          </TouchableOpacity>

          <Text style={styles.Text}>Dùng địa chỉ nhận hàng này</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={address}
          renderItem={renderAddress}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.TextHead}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.TextQuenMatKhau}></Text>
          </TouchableOpacity>

          <Text style={styles.Text}>Dùng địa chỉ nhận hàng này</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={address}
          renderItem={renderAddress}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.TextHead}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.TextQuenMatKhau}></Text>
          </TouchableOpacity>

          <Text style={styles.Text}>Dùng địa chỉ nhận hàng này</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={address}
          renderItem={renderAddress}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <Image source={require('../../Media/icon/icon_plus.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 14,
  },
  addressItem: {
    backgroundColor: '#4A4A4A',
    borderRadius: 8,
    padding: 22,
    marginVertical: 10,
  },
  addressText1: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  adressText: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 5,
  },
  adressText2: {
    color: '#B3B3B3',
    marginTop: 10,
    fontSize: 16,
  },
  detailsButton: {
    color: '#2F7AFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
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
  TextQuenMatKhau: {
    borderRadius: 24,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 10,
  },
  Text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  TextHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
});

export default MyAddress;
