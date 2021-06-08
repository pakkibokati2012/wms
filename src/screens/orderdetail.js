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
        paddingBottom: 30,
      }}>
      <View style={{paddingVertical: 10, marginBottom: 30}}>
        <View style={{}}>
          <Text style={{fontSize: 26}}>Order of 50 darts.</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontWeight: '700'}}>Total available darts: </Text>
          <Text>400</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text style={{fontWeight: '700'}}>Dart available location: </Text>
          <Text>XYZ123</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#dedede',
          padding: 8,
          borderRadius: 2,
          marginBottom: 15,
        }}>
        <Text style={{fontSize: 12}}>
          Please pick 50 darts from XYZ123. Pack it into the box, put a delivery
          note and scan the delivery note by pressing the button below
        </Text>
      </View>
      <Button
        title="proceed"
        onPress={() => {
          navigation.navigate('DeliveryLabelScanner');
        }}
        color={colors.primary}
      />
    </View>
  );
}
