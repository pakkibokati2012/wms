import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Orders({navigation}) {
  const orders = [
    {id: '123', name: 'Order 1', done: true},
    {id: '123', name: 'Order 2', done: true},
    {id: '123', name: 'Order 3', done: true},
    {id: '123', name: 'Order 4', done: true},
    {id: '123', name: 'Order 5', done: true},
  ];
  return (
    <View>
      {orders.map(order => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrderDetail');
            }}>
            <Text>{order.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
