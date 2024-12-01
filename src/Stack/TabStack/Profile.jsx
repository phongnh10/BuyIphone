import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contain_1}>
        <View style={styles.contain_2}>
          <Image
            source={require('../../Media/image/profile_avatar.jpg')}
            style={styles.avatar}
          />
          <View style={styles.contain_3}>
            <Text style={styles.name}>Thạch Trangg</Text>
            <Text style={styles.email}>my20s@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.setItem('email', '');
            navigation.navigate('StackUnkkownNav');
          }}>
          <Image
            source={require('../../Media/icon/icon_logout.png')}
            style={styles.logOut}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyOders');
          }}>
          <Text style={styles.sectionTitle}>Đơn hàng của tôi</Text>
          <Text style={styles.sectionContent}>Đã có 20 đơn đặt hàng</Text>
        </TouchableOpacity>
        <Image
          source={require('../../Media/icon/icon_arrow_right.png')}
          style={{width: 24, height: 24}}
        />
      </View>

      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('MyAddress')}>
        <View>
          <Text style={styles.sectionTitle}>Địa chỉ nhận hàng</Text>
          <Text style={styles.sectionContent}>Có 3 địa chỉ</Text>
        </View>
        <Image
          source={require('../../Media/icon/icon_arrow_right.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('MyRating')}>
        <View>
          <Text style={styles.sectionTitle}>Đánh giá của tôi</Text>
          <Text style={styles.sectionContent}>Đánh giá cho 4 sản phẩm</Text>
        </View>
        <Image
          source={require('../../Media/icon/icon_arrow_right.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Setting')}>
        <View>
          <Text style={styles.sectionTitle}>Cài đặt</Text>
          <Text style={styles.sectionContent}>
            Thông báo, mật khẩu, trợ giúp
          </Text>
        </View>
        <Image
          source={require('../../Media/icon/icon_arrow_right.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20,
  },
  avatar2: {
    backgroundColor: 'white',
  },
  contain_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 32,
  },

  contain_2: {
    flexDirection: 'row',
  },

  contain_3: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#4A4A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionContent: {
    fontSize: 16,
    color: 'white',
  },
});
