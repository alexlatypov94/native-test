/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer, NavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CardTab} from './src/routes';
import {Linking, LogBox, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const App = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl === null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString && JSON.parse(savedStateString);

          if (state) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const onStateChange = (state: NavigationState | undefined) => {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={onStateChange}>
        <CardTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
