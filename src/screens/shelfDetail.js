import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button, Alert} from 'react-native';
import {colors} from '../constants/colors';

export default function PackageDetail({navigation}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Location:</Text>
        <Text style={{fontSize: 20}}>XYZ123</Text>
      </View>
      <View
        style={{
          backgroundColor: '#dedede',
          padding: 8,
          borderRadius: 2,
          marginBottom: 15,
        }}>
        <Text style={{fontSize: 12}}>
          Please place the box in above location and press submit.
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
