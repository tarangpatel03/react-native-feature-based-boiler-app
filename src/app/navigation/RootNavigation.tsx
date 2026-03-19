import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationParamList, BottomTabNavigation } from '@/app';
import { appRoutes } from '@/shared';

export const navigationRef =
  createNavigationContainerRef<RootNavigationParamList>();
const Stack = createNativeStackNavigator<AppNavigationParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={appRoutes.BottomTab}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(RootNavigation);
