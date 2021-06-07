import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import DeliveryLabelScanner from '../screens/deliverylabelscanner';
import OrderDetail from '../screens/orderdetail';
import Orders from '../screens/orders';

const Stack = createStackNavigator();

export default function OrderNavigator({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'OrderDetail') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen
        name="DeliveryLabelScanner"
        component={DeliveryLabelScanner}
      />
    </Stack.Navigator>
  );
}
