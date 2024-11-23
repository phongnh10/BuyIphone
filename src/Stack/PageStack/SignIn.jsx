import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/Styles_SignIn';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPassword] = React.useState('');
  const BtnLogin = () => {
    navigation.navigate('TabNavigation');
    ToastAndroid.show('Success', ToastAndroid.SHORT);
  };
  const BtnQuenMK = () => {
    Alert.alert('Chưa hoàn thành');
  };
  const BtnDangKy = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image
          style={styles.logo}
          source={require('../../Media/image/Logo_App_2.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textDN}>Đăng nhập</Text>
      <View>
        <Text style={styles.text1}>Email hoặc số điện thoại</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="white"
          placeholder=""
        />
        <Text style={styles.text1}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholderTextColor="white"
          secureTextEntry={true}
          value={pass}
          placeholder=""
        />
      </View>
      <View style={styles.quenMK}>
        <TouchableOpacity onPress={BtnQuenMK}>
          <Text style={styles.quenMKText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={BtnLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.khongCOTK}>
        <Text style={styles.khongCOTKText}>Không có tài khoản? </Text>
        <TouchableOpacity onPress={BtnDangKy}>
          <Text style={styles.quenMKText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles=StyleSheet.create({
//   // container:{
//   //   flex:1,
//   //   justifyContent:'center',
//   //   backgroundColor:colors.Primary,
//   //   paddingHorizontal:20
//   // },
//   // viewLogo:{
//   //   alignItems:'center',
//   //   marginBottom:30
//   // },
//   // logo:{
//   //   height: screenWidth * 0.25,
//   //   width: screenWidth * 0.25,
//   // },
//   // textDN:{
//   //   color:'white',
//   //   fontSize:screenWidth * 0.08,
//   //   marginBottom:30
//   // },
//   // text1:{
//   //   color:'white',
//   //   fontSize:screenWidth * 0.05,
//   // },
//   // input:{
//   //   borderBottomWidth:1.5,
//   //   borderColor:'white',
//   //   marginBottom:20,
//   //   color:'white',
//   //   fontSize:screenWidth * 0.05
//   // },
//   // quenMK:{
//   //   alignItems:'flex-end',
//   //   marginBottom:20
//   // },
//   // quenMKText:{
//   //   color:colors.Point_Color,
//   //   fontSize:screenWidth * 0.04
//   // },
//   // button: {
//   //   alignItems: 'center',
//   //   backgroundColor: colors.Point_Color,
//   //   padding: 10,
//   //   borderRadius:10,
//   // },
//   // buttonText:{
//   //   color:'white',
//   //   fontSize:screenWidth * 0.05,
//   // },
//   // khongCOTK:{
//   //   flexDirection:'row',
//   //   alignItems:'center',
//   //   justifyContent:'center',
//   //   marginTop:20
//   // },
//   // khongCOTKText:{
//   //   color:'white'
//   // }
// })
export default SignIn;
