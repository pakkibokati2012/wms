'use strict';

import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ShelfScanner = ({navigation}) => {
  const [postingInfo, setPostingInfo] = useState(false);
  const onSuccess = e => {
    setPostingInfo(true);
    setTimeout(() => {
      setPostingInfo(false);
      navigation.navigate('PackageScanner');
    }, 2000);
    navigation.navigate('ShelfScanner');
  };

  if (postingInfo) {
    return (
      <View>
        <ActivityIndicator color={'red'} />
        <Text>Posting data to backend!</Text>
      </View>
    );
  }

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      cameraStyle={{flex: 0.5}}
      topContent={
        <Text style={styles.centerText}>Scan code on the shelf!</Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable} onPress={onSuccess}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
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
