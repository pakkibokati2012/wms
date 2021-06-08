import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
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
      <Text style={{fontSize: 30, marginBottom: 30}}>
        Box contains 400 darts.
      </Text>
      <Button
        title="Proceed to scanning the location"
        onPress={() => {
          navigation.navigate('ShelfScanner');
        }}
        color={colors.primary}
      />
    </View>
  );
}
