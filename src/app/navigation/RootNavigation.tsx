import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation.types';
import { BottomTabNavigation } from './BottomTabNavigation';
import { navigationRef } from '@/shared/navigation';
import { appRoutes } from './navigation.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={appRoutes.BottomTab} component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
