import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';

export default function OrderDetail({navigation}) {
  const [loadingDetail, setLoadingDetail] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingDetail(false);
    }, 2000);
  });

  if (loadingDetail) {
    return (
      <View sytle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'red'} />
      </View>
    );
  }
  return (
    <View>
      <Text>Here is the order details.</Text>
      <Text>
        Dolore est quis ea laborum sit. Adipisicing dolore do est voluptate ex
        officia occaecat qui. Qui cupidatat magna dolor id in quis. Cillum sit
        et id commodo labore laborum nisi. Aliqua sunt commodo ad nostrud
        excepteur duis officia qui fugiat ad cupidatat sint veniam sunt. Ea esse
        officia minim dolore dolore aute ea eu nulla quis tempor ipsum elit.
      </Text>
      <Button
        title="Proceed to scanning the delivery label"
        onPress={() => {
          navigation.navigate('DeliveryLabelScanner');
        }}
      />
    </View>
  );
}
