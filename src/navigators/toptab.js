import React from 'react';
import OrderNavigator from './ordernavigator';
import ScannerNavigator from './scannernavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      name="RootTab"
      tabBarOptions={{
        activeTintColor: colors.primary,
        labelStyle: {
          fontSize: 12,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) =>
          route.name === 'Scanner' ? (
            <FontAwesome
              name="qrcode"
              size={26}
              color={focused ? colors.primary : '#999'}
            />
          ) : (
            <MaterialCommunityIcons
              name="order-bool-descending-variant"
              size={26}
              color={focused ? colors.primary : '#999'}
            />
          ),
      })}>
      <Tab.Screen name="Scanner" component={ScannerNavigator} />
      <Tab.Screen name="Orders" component={OrderNavigator} />
    </Tab.Navigator>
  );
}
