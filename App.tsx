import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { CollectDetailsScreen } from './src/screens/CollectDetailsScreen';
import { CollectLaunchScreen } from './src/screens/CollectLaunchScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CollectLaunchScreen />
    </ThemeProvider>
  );
}
