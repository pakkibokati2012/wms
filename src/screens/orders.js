import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

export default function Orders({navigation}) {
  return (
    <ScrollView
      style={{flexGrow: 1, backgroundColor: 'white', paddingVertical: 20}}>
      {Array(20)
        .fill('')
        .map((_, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingVertical: 18,
                paddingHorizontal: 15,
                backgroundColor: 'white',
                marginBottom: 12,
                elevation: 2,
                marginHorizontal: 12,
              }}
              onPress={() => {
                navigation.navigate('OrderDetail');
              }}>
              <Text>Order {index + 1}</Text>
              <Text style={{color: '#999', fontSize: 12}}>May 29, 2021</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
}
