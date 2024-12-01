import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../Styles/colors';
import {ActivityIndicator} from 'react-native-paper';

const {width: screenWidth} = Dimensions.get('window');

const Intro = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Media/image/Logo_App.png')}
        resizeMode="contain"
      />
      <Text style={styles.nameShop}>iShop</Text>
      <Text style={styles.footerText}>Make by Nhóm 4</Text>
      <ActivityIndicator size={'small'} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Primary,
  },
  logo: {
    height: screenWidth * 0.5,
    width: screenWidth * 0.5,
  },
  nameShop: {
    marginTop: 20,
    color: 'white',
    fontSize: screenWidth * 0.1,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
    fontSize: screenWidth * 0.04,
  },
});

export default Intro;
