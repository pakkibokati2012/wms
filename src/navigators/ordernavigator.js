import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {colors} from '../constants/colors';
import DeliveryLabelScanner from '../screens/deliverylabelscanner';
import OrderDetail from '../screens/orderdetail';
import Orders from '../screens/orders';
import DeliveryDetail from '../screens/deliveryDetail';

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
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{title: 'Order Detail'}}
      />
      <Stack.Screen
        name="DeliveryLabelScanner"
        options={{title: 'Delivery Label Scanner'}}
        component={DeliveryLabelScanner}
      />
      <Stack.Screen
        name="DeliveryDetail"
        options={{title: 'Delivery Detail'}}
        component={DeliveryDetail}
      />
    </Stack.Navigator>
  );
}
