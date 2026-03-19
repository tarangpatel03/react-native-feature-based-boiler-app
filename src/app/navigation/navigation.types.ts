import { NavigatorScreenParams } from '@react-navigation/native';

// Bottom tab screens
export type BottomTabNavigationParamList = {
  Home: undefined;
  Second: undefined;
};

// Root stack
export type AppNavigationParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>;
};
