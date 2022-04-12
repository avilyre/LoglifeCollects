export enum ScreenNames {
  LoginScreen = "LoginScreen",
  CollectHomeScreen = "CollectHomeScreen",
  CollectDetailsScreen = "CollectDetailsScreen",
  CollectLaunchScreen = "CollectLaunchScreen",
  LaunchSuccessScreen = "LaunchSuccessScreen",
}

export interface CollectData {
  client: string;
  date: string;
  address: string;
}

export type RoutesParams = {
  LoginScreen: {};
  CollectHomeScreen: {};
  CollectDetailsScreen: {
    collectData: CollectData
  };
  CollectLaunchScreen: {};
  LaunchSuccessScreen: {};
}
