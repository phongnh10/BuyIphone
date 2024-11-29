import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const SignUp = () => {

  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        {/* <Image style={styles.Imagelogo} source={require('../../Media/image/Logo_App.png.png')} /> */}
      </View>
      <Text style={styles.TextDangKy}>Đăng ký</Text>
      <View>
        <Text style={styles.TextHoten}>Họ tên</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'white'}
        />
      </View>
      <View>
        <Text style={styles.TextHoten}>Email hoặc số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'white'}
        />
      </View>
      <View>
        <Text style={styles.TextHoten}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'white'}
        />
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.QuenMatKhau} onPress={Alert.alert = 'hybgy'}>
          <Text style={styles.TextQuenMatKhau}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Button} onPress={''}>
        <Text style={styles.TextButton}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.text_SignUp}>Bạn đã có tài khoản?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.TextQuenMatKhau}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20
  },
  Imagelogo: {
    width: 74,
    height: 77,
  },
  ImageView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 100
  },
  TextDangKy: {
    color: 'white',
    fontSize: 30,
    marginTop: 36
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white'
  },
  TextHoten: {
    color: 'white',
    marginTop: 33,
    fontSize: 20,

  },
  QuenMatKhau: {
    color: 'white'
  },
  TextQuenMatKhau: {
    color: '#2F7AFF',
    fontSize: 16,
    marginTop: 30,

  },
  Button: {
    backgroundColor: '#2F7AFF',
    borderRadius: 14,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  TextButton: {
    color: 'white',
    fontSize: 20,

  },
  text_SignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 32,
    marginRight: 5
  },
})

export default SignUp