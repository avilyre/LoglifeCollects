import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CollectData, RoutesParams } from "../../routes/interface";

export interface ImageProps {
  uri: string;
}

export interface CollectLaunchScreenProps {
  route: RouteProp<{
    params: {
      collectData: CollectData;
    };
  }>
  navigation: NativeStackNavigationProp<RoutesParams>;
}
