'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const PackageScanner = ({navigation}) => {
  const onSuccess = e => {
    navigation.navigate('ShelfScanner');
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      cameraStyle={{overflow: 'hidden'}}
      showMarker={true}
      topContent={<Text style={styles.centerText}>Scan code on the box!</Text>}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable} onPress={onSuccess}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default PackageScanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
