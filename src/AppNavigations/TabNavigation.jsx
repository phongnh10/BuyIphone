import {Image, View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Stack/TabStack/Home';
import News from '../Stack/TabStack/News';
import Notify from '../Stack/TabStack/Notify';
import Profile from '../Stack/TabStack/Profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 50,
          paddingTop: 3,
          backgroundColor: '#202020',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="center"
                source={require('.././Media/icon/icon_homeUnClick.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'blue' : 'white',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="center"
                source={require('.././Media/icon/icon_newsUnClick.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'blue' : 'white',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="center"
                source={require('.././Media/icon/icon_notifyUnClick.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'blue' : 'white',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="center"
                source={require('.././Media/icon/icon_profileUnClick.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'blue' : 'white',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  dot: {
    width: 1,
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 3,
    alignSelf: 'center',
  },
});
