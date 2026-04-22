import { HomeStackParamList } from '@/features/home';
import { NavigatorScreenParams } from '@react-navigation/native';
import { bottomTabRoutes, appRoutes } from './navigation.routes';

export type BottomTabParamList = {
  [bottomTabRoutes.HomeStack]: NavigatorScreenParams<HomeStackParamList>;
};

export type RootStackParamList = {
  [appRoutes.BottomTab]: NavigatorScreenParams<BottomTabParamList>;
};
