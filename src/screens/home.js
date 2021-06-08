'use strict';

import React from 'react';
import {View, Button} from 'react-native';
import {colors} from '../constants/colors';

const Home = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
    <Button
      title="Tap to scan"
      onPress={() => navigation.navigate('PackageScanner')}
      color={colors.primary}
    />
  </View>
);

export default Home;
