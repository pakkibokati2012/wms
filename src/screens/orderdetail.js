import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {colors} from '../constants/colors';

export default function OrderDetail({navigation}) {
  const [loadingDetail, setLoadingDetail] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingDetail(false);
    }, 2000);
  }, []);

  if (loadingDetail) {
    return <ActivityIndicator color={colors.primary} style={{marginTop: 10}} />;
  }
  return (
    <View
      style={{
        paddingHorizontal: 12,
        flex: 1,
        paddingTop: 20,
        paddingBottom: 30,
      }}>
      <Text style={{fontSize: 20}}>Here is the order details.</Text>
      <View style={{paddingVertical: 10, flex: 1}}>
        <Text>
          Dolore est quis ea laborum sit. Adipisicing dolore do est voluptate ex
          officia occaecat qui. Qui cupidatat magna dolor id in quis. Cillum sit
          et id commodo labore laborum nisi. Aliqua sunt commodo ad nostrud
          excepteur duis officia qui fugiat ad cupidatat sint veniam sunt. Ea
          esse officia minim dolore dolore aute ea eu nulla quis tempor ipsum
          elit.
        </Text>
      </View>
      <Button
        title="Proceed to scanning the delivery label"
        onPress={() => {
          navigation.navigate('DeliveryLabelScanner');
        }}
        color={colors.primary}
      />
    </View>
  );
}
