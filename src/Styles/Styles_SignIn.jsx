import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.Primary,
    paddingHorizontal: 20,
  },
  viewLogo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    height: screenWidth * 0.3,
    width: screenWidth * 0.25,
  },
  textDN: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: screenWidth * 0.1,
    marginBottom: 30,
  },
  text1: {
    color: 'white',
    fontSize: screenWidth * 0.05,
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: 'white',
    marginBottom: 5,
    color: 'white',
    fontSize: screenWidth * 0.05,
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
  quenMK: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  quenMKText: {
    color: colors.Point_Color,
    fontSize: screenWidth * 0.04,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.Point_Color,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: screenWidth * 0.05,
  },
  khongCOTK: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  khongCOTKText: {
    color: 'white',
  },
});

export default styles;
