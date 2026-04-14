// app/navigation/BottomTabNavigation.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './navigation.types';
import { HomeNavigator } from '@/features/home/navigation/HomeNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'HomeStack'} component={HomeNavigator} />
    </Tab.Navigator>
  );
};
