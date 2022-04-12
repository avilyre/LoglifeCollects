import { CollectDetailsScreenParams } from "../screens/CollectDetailsScreen/interface";

export enum ScreenNames {
  LoginScreen = "LoginScreen",
  CollectHomeScreen = "CollectHomeScreen",
  CollectDetailsScreen = "CollectDetailsScreen",
  CollectLaunchScreen = "CollectLaunchScreen",
  LaunchSuccessScreen = "LaunchSuccessScreen",
}

export type RoutesParams = {
  LoginScreen: {};
  CollectHomeScreen: {};
  CollectDetailsScreen: {
    data: CollectDetailsScreenParams
  };
  CollectLaunchScreen: {};
  LaunchSuccessScreen: {};
}
