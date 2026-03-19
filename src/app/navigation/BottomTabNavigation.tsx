/* eslint-disable react/no-unstable-nested-components */
import { appRoutes, normalize, TabIcon, Theme, useTheme } from '@/shared';
import { Platform, StyleSheet } from 'react-native';
import React, { memo, useMemo } from 'react';
import { appAssets } from '@/assets';
import { BottomTabNavigationParamList } from '@/app';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen, SecondScreen } from '@/features';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

const BottomTabNavigation = () => {
  const theme = useTheme<Theme>();
  const { bottom } = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: StyleSheet.flatten([
          styles.container,
          {
            paddingBottom: Platform.OS === 'android' ? bottom : bottom,
          },
        ]),
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name={appRoutes.HOME.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <TabIcon icon={appAssets.icons.ic_home} />,
        }}
      />
      <Tab.Screen
        name={appRoutes.HOME.Second}
        component={SecondScreen}
        options={{
          tabBarIcon: () => <TabIcon icon={appAssets.icons.ic_profile} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(BottomTabNavigation);

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      borderTopWidth: 1,
      backgroundColor: theme.colors.background,
    },
    label: {
      fontWeight: '400',
      fontSize: normalize(12),
      color: theme.colors.primaryText,
    },
  });
};
