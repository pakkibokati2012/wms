import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button, Alert} from 'react-native';
import {colors} from '../constants/colors';

export default function PackageDetail({navigation}) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
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
      <View style={{marginBottom: 25}}>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Delivery Location:
          </Text>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 20}}>
              {' '}
              483 Green Lanes, London, N13 4BS
            </Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Package type: </Text>
          <Text style={{fontSize: 20}}>Darts</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Quantity: </Text>
          <Text style={{fontSize: 20}}>50 darts</Text>
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
          Please send the package for delivery and press submit
        </Text>
      </View>
      <Button
        title="Submit"
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            Alert.alert('', 'Data submitted successfully');
            navigation.popToTop();
          }, 2000);
        }}
        color={colors.primary}
      />
    </View>
  );
}
