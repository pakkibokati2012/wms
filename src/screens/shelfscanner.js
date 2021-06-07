'use strict';

import React, {useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from '../constants/colors';

const ShelfScanner = ({navigation}) => {
  const [postingInfo, setPostingInfo] = useState(false);

  const onSuccess = e => {
    setPostingInfo(true);
    setTimeout(() => {
      Alert.alert('', 'Data submitted successfully');
      setPostingInfo(false);
      navigation.popToTop();
    }, 4000);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setPostingInfo(true);
      Alert.alert('', 'Data submitted successfully');
      setPostingInfo(false);
      navigation.popToTop();
    }, 4000);
  }, [navigation]);

  if (postingInfo) {
    return (
      <View
        style={{
          paddingTop: 20,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={{marginLeft: 5}}>Please wait!</Text>
      </View>
    );
  }

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      cameraStyle={{overflow: 'hidden'}}
      topContent={
        <Text style={styles.centerText}>Scan code on the shelf!</Text>
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
