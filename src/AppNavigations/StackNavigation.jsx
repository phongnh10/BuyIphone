import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from '../Stack/PageStack/Intro';
import SignUp from '../Stack/PageStack/SignUp';
import SignIn from '../Stack/PageStack/SignIn';
import TabNavigation from './TabNavigation';
import Myoders from '../Stack/PageStack/Myoders';

import Setting from '../Stack/PageStack/Setting';
import MyRating from '../Stack/PageStack/MyRating';
import MyAddress from '../Stack/PageStack/MyAddress';
import AddAddress from '../Stack/PageStack/AddAddress';

import Cart from '../Stack/PageStack/Cart';
import Detail from '../Stack/PageStack/Detail';
import DetailNews from '../Stack/PageStack/DetailNews';
import Payment from '../Stack/PageStack/Payment';
import Review from '../Stack/PageStack/Review';
import Search from '../Stack/PageStack/Search';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name='MyOders' component={Myoders}/>
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='MyRating' component={MyRating}/>
      <Stack.Screen name='MyAddress' component={MyAddress}/>
      <Stack.Screen name='AddAddress' component={AddAddress}/>

      <Stack.Screen name="MyOders" component={Myoders} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="DetailNews" component={DetailNews} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
