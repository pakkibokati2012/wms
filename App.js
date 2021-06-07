import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabs from './src/navigators/toptab';
import {navigationRef, setNavigationRefReady} from './src/helper/navigation';

export default function App() {
  React.useEffect(
    () => () => {
      setNavigationRefReady(false);
    },
    [],
  );
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setNavigationRefReady(true);
      }}>
      <TopTabs />
    </NavigationContainer>
  );
}
