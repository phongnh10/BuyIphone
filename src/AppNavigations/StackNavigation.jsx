import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from '../Stack/PageStack/Intro';
import SignUp from '../Stack/PageStack/SignUp';
import SignIn from '../Stack/PageStack/SignIn';
import TabNavigation from './TabNavigation';
import Myoders from '../Stack/PageStack/Myoders';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name='MyOders' component={Myoders}/>
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
