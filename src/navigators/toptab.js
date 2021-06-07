import React from 'react';
import OrderNavigator from './ordernavigator';
import ScannerNavigator from './scannernavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator name="RootTab">
      <Tab.Screen name="Scanner" component={ScannerNavigator} />
      <Tab.Screen name="Orders" component={OrderNavigator} />
    </Tab.Navigator>
  );
}
