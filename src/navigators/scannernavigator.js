import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {colors} from '../constants/colors';
import Home from '../screens/home';
import PackageScanner from '../screens/packagescanner';
import PackageDetail from '../screens/packageDetail';
import ShelfScanner from '../screens/shelfscanner';
import ShelfDetail from '../screens/shelfDetail';

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
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="PackageScanner"
        component={PackageScanner}
        options={{title: 'Package Scanner'}}
      />
      <Stack.Screen
        name="PackageDetail"
        component={PackageDetail}
        options={{title: 'Package Detail'}}
      />
      <Stack.Screen
        name="ShelfScanner"
        component={ShelfScanner}
        options={{title: 'Location Scanner'}}
      />
      <Stack.Screen
        name="ShelfDetail"
        component={ShelfDetail}
        options={{title: 'Location Detail'}}
      />
    </Stack.Navigator>
  );
}
