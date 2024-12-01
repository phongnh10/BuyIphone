import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

//*stack for unkonwn
const StackUnkkown = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="StackUserNav" component={StackUser} />
    </Stack.Navigator>
  );
};

//*stack for user
const StackUser = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

      <Stack.Screen name="MyOders" component={Myoders} />
      <Stack.Screen name="MyAddress" component={MyAddress} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="MyRating" component={MyRating} />
      <Stack.Screen name="Setting" component={Setting} />

      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="DetailNews" component={DetailNews} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="StackUnkkownNav" component={StackUnkkown} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);
  //*check user or unknown
  const getData = async () => {
    const res = await AsyncStorage.getItem('email');
    setIsUser(!!res);
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);
  if (loading) {
    return <Intro />;
  }
  return isUser ? <StackUser /> : <StackUnkkown />;
};

export default StackNavigation;
