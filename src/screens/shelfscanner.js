'use strict';

import React, {useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from '../constants/colors';

const ShelfScanner = ({navigation}) => {
  const onSuccess = e => {
    navigation.navigate('ShelfDetail');
  };

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ShelfDetail');
    }, 5000);
  }, [navigation]);

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      cameraStyle={{overflow: 'hidden'}}
      topContent={
        <Text style={styles.centerText}>Scan code on the location!</Text>
      }
      // bottomContent={
      //   <TouchableOpacity style={styles.buttonTouchable} onPress={onSuccess}>
      //     <Text style={styles.buttonText}>OK. Got it!</Text>
      //   </TouchableOpacity>
      // }
    />
  );
};

export default ShelfScanner;

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
