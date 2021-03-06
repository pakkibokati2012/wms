'use strict';

import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const DeliveryLabelScanner = ({navigation}) => {
  const onSuccess = e => {
    navigation.navigate('DeliveryDetail');
  };

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryDetail');
    }, 5000);
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        cameraStyle={{overflow: 'hidden'}}
        topContent={
          <Text style={styles.centerText}>Scan the delivery label!</Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable} onPress={onSuccess}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    </View>
  );
};

export default DeliveryLabelScanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
