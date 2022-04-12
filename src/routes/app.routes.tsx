import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoutesParams, ScreenNames } from "./interface";
import { LoginScreen } from "../screens/LoginScreen";
import { CollectsHomeScreen } from "../screens/CollectHomeScreen";
import { CollectDetailsScreen } from "../screens/CollectDetailsScreen";
import { CollectLaunchScreen } from "../screens/CollectLaunchScreen";
import { LaunchSuccessScreen } from "../screens/LaunchSuccessScreen";
import { useAuth } from "../hooks/useAuth";

const { Navigator, Screen } = createNativeStackNavigator<RoutesParams>();


export function AppRoutes(): JSX.Element {
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {user !== undefined ? (
        <>
          <Screen name={ScreenNames.CollectHomeScreen} component={CollectsHomeScreen} />
          <Screen name={ScreenNames.CollectDetailsScreen} component={CollectDetailsScreen} />
          <Screen name={ScreenNames.CollectLaunchScreen} component={CollectLaunchScreen} />
          <Screen name={ScreenNames.LaunchSuccessScreen} component={LaunchSuccessScreen} />
        </>
      ) : (
        <Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
      )}
    </Navigator>
  );
}
