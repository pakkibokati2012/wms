'use strict';

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const PackageScanner = ({navigation}) => {
  const onSuccess = e => {
    navigation.navigate('ShelfScanner');
  };

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ShelfScanner');
    }, 5000);
  }, [navigation]);

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      cameraStyle={{overflow: 'hidden'}}
      showMarker={true}
      topContent={<Text style={styles.centerText}>Scan code on the box!</Text>}
      // bottomContent={
      //   <TouchableOpacity
      //     style={styles.buttonTouchable}
      //     onPress={() => setIsScannerOpen(false)}>
      //     <Text style={styles.buttonText}>Cancel</Text>
      //   </TouchableOpacity>
      // }
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
