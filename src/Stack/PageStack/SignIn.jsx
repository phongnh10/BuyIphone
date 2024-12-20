import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/Styles_SignIn';
import colors from '../../Styles/colors';
import {login} from '../../Helper/APIHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('columbia2@gmail.com');
  const [password, setPassword] = useState('123445678');
  const [erroremail, setErrorEmail] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [loading, setLoading] = useState(false);
  const regexemail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isLoginEable = erroremail == '' && errorpassword == '';

  //*call api
  const BtnLogin = async () => {
    setLoading(true);
    try {
      const res = await login({email, password});
      setLoading(false);
      if (res) {
        AsyncStorage.setItem('email', email);
        navigation.navigate('StackUserNav');
        ToastAndroid.show('Login successful', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      }
    } catch (error) {}
  };
  const BtnQuenMK = () => {
    Alert.alert('ok');
  };
  const BtnDangKy = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} color="#000ff" />
      ) : (
        <View style={styles.container}>
          {/* header */}
          <View style={styles.viewLogo}>
            <Image
              style={styles.logo}
              source={require('../../Media/image/Logo_App_2.png')}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textDN}>Đăng nhập</Text>

          {/* body */}
          <View>
            <Text style={styles.text1}>Email hoặc số điện thoại</Text>
            <TextInput
              style={styles.input}
              onChangeText={mail => {
                if (regexemail.test(mail)) {
                  setErrorEmail('');
                } else {
                  setErrorEmail('Sai định dạng email.');
                }
                setEmail(mail);
              }}
              value={email}
              placeholderTextColor="white"
              placeholder=""
            />
            <View style={{height: 18, marginBottom: 5}}>
              {erroremail && (
                <Text style={{fontSize: 12, color: 'red'}}>{erroremail}</Text>
              )}
            </View>

            <Text style={styles.text1}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={showPass}
              onChangeText={pass => {
                if (pass.length < 8) {
                  setErrorPassword('Độ dài mật khẩu phải từ 8 ký tự');
                } else {
                  setErrorPassword('');
                }
                setPassword(pass);
              }}
              placeholderTextColor="white"
              value={password}
              placeholder=""
            />
            <View style={{height: 18, marginBottom: 5}}>
              {errorpassword && (
                <Text style={{fontSize: 12, color: 'red'}}>
                  {errorpassword}
                </Text>
              )}
            </View>

            {/* eye */}
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setShowPass(!showPass)}>
              <Image
                resizeMode="contain"
                style={styles.eye}
                source={require('../../Media/icon/icon_eye.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.quenMK}>
            <TouchableOpacity onPress={BtnQuenMK}>
              <Text style={styles.quenMKText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          {/* footer */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isLoginEable ? colors.Point_Color : 'gray'},
            ]}
            onPress={BtnLogin}
            disabled={!isLoginEable}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.khongCOTK}>
            <Text style={styles.khongCOTKText}>Không có tài khoản? </Text>
            <TouchableOpacity onPress={BtnDangKy}>
              <Text style={styles.quenMKText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
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
