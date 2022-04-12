import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoutesParams, ScreenNames } from "./interface";
import { LoginScreen } from "../screens/LoginScreen";
import { CollectsHomeScreen } from "../screens/CollectHomeScreen";
import { CollectDetailsScreen } from "../screens/CollectDetailsScreen";
import { CollectLaunchScreen } from "../screens/CollectLaunchScreen";
import { LaunchSuccessScreen } from "../screens/LaunchSuccessScreen";

const { Navigator, Screen } = createNativeStackNavigator<RoutesParams>();

export function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
      <Screen name={ScreenNames.CollectHomeScreen} component={CollectsHomeScreen} />
      <Screen name={ScreenNames.CollectDetailsScreen} component={CollectDetailsScreen} />
      <Screen name={ScreenNames.CollectLaunchScreen} component={CollectLaunchScreen} />
      <Screen name={ScreenNames.LaunchSuccessScreen} component={LaunchSuccessScreen} />
    </Navigator>
  );
}
