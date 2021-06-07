import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import PackageScanner from '../screens/packagescanner';
import ShelfScanner from '../screens/shelfscanner';

const Stack = createStackNavigator();

export default function ScannerNavigator({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'ShelfScanner') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PackageScanner"
        component={PackageScanner}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ShelfScanner" component={ShelfScanner} />
    </Stack.Navigator>
  );
}
