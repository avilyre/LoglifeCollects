import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from "@react-navigation/native";

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';
import { AuthProvider } from './src/hooks/useAuth';

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
     <AuthProvider>
      <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
     </AuthProvider>
    </ThemeProvider>
  );
}
