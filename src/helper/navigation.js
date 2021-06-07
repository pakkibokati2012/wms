// RootNavigation.js

import {CommonActions} from '@react-navigation/native';
import * as React from 'react';

export let isRefReady;

export const navigationRef = React.createRef();

export const reset = () => {
  if (isRefReady && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'RootTab'}],
      }),
    );
  } else {
    // We can decide what to do if the app hasn't mounted
    // We can ignore this, or add these actions to a queue we can call later
  }
};

export function setNavigationRefReady(refStatus) {
  isRefReady = refStatus;
}
