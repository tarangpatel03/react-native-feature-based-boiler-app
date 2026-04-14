import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  Second: undefined;
};

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};
