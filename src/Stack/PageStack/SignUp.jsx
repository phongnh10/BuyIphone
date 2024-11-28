import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {register} from '../../Helper/APIHelper';
import colors from '../../Styles/colors';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('Zeri');
  const [email, setEmail] = useState('columbia2@gmail.c');
  const [password, setPassword] = useState('12344567');
  const [errorname, setErrorName] = useState('Chưa nhập tên');
  const [erroremail, setErrorEmail] = useState('Sai định dạng email.');
  const [errorpassword, setErrorPassword] = useState(
    'Độ dài mật khẩu phải từ 8 ký tự',
  );
  const [showPass, setShowPass] = useState(true);
  const regexemail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isSignUpEable =
    errorname == '' && erroremail == '' && errorpassword == '';

  const BtnSignUp = async () => {
    const res = await register({name, email, password});
    if (res) {
      navigation.navigate('TabNavigation');
      ToastAndroid.show('Register successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Register failed', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.ImageView}>
        <Image
          style={styles.Imagelogo}
          source={require('../../Media/image/Logo_App.png')}
        />
      </View>
      <Text style={styles.TextDangKy}>Đăng ký</Text>

      {/* body */}
      <View>
        <Text style={styles.TextHoten}>Họ tên</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => {
            if (text.length < 1) {
              setErrorName('Chưa nhập tên');
            } else {
              setErrorName('');
            }
            setName(text);
          }}
          placeholderTextColor={'white'}
        />
        <View style={{height: 18, marginVertical: 5}}>
          {errorname && (
            <Text style={{fontSize: 12, color: 'red'}}>{errorname}</Text>
          )}
        </View>
      </View>

      <View>
        <Text style={styles.TextHoten}>Email hoặc số điện thoại</Text>
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
          placeholderTextColor={'white'}
        />
        <View style={{height: 18, marginVertical: 5}}>
          {erroremail && (
            <Text style={{fontSize: 12, color: 'red'}}>{erroremail}</Text>
          )}
        </View>
      </View>

      <View>
        <Text style={styles.TextHoten}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={showPass}
          value={password}
          onChangeText={pass => {
            if (pass.length < 9) {
              setErrorPassword('Độ dài mật khẩu phải từ 8 ký tự');
            } else {
              setErrorPassword('');
            }
            setPassword(pass);
          }}
          placeholderTextColor={'white'}
        />
        <View style={{height: 18, marginVertical: 5}}>
          {errorpassword && (
            <Text style={{fontSize: 12, color: 'red'}}>{errorpassword}</Text>
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

      {/* footer */}
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.QuenMatKhau}
          onPress={() => {
            Alert.alert('ok');
          }}>
          <Text style={styles.TextQuenMatKhau}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.Button,
          {backgroundColor: isSignUpEable ? colors.Point_Color : 'gray'},
        ]}
        onPress={() => BtnSignUp()}
        disabled={!isSignUpEable}>
        <Text style={styles.TextButton}>Đăng ký</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={styles.text_SignUp}>Bạn đã có tài khoản?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.TextQuenMatKhau}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  Imagelogo: {
    width: 74,
    height: 77,
  },
  ImageView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  TextDangKy: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 25,
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  TextHoten: {
    color: 'white',
    marginTop: -13,
    fontSize: 20,
  },
  eyeContainer: {
    position: 'absolute',
    bottom: 35,
    end: 10,
  },
  eye: {
    width: 20,
    height: 20,
  },
  QuenMatKhau: {
    color: 'white',
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
    marginTop: 50,
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
    marginRight: 5,
  },
});

export default SignUp;
