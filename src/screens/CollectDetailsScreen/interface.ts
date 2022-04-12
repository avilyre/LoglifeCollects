import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CollectData, RoutesParams } from "../../routes/interface";

export interface CollectDetailsScreenProps {
  route: RouteProp<{
    params: {
      collectData: CollectData;
    };
  }>
  navigation: NativeStackNavigationProp<RoutesParams>;
}
