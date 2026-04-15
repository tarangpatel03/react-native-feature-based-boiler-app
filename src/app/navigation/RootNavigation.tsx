import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation.types';
import { BottomTabNavigation } from './BottomTabNavigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'BottomTab'} component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
