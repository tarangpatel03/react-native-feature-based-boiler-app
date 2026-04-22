import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SecondScreen } from '../screens';
import { homeRoutes, HomeStackParamList } from './home.routes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={homeRoutes.Home} component={HomeScreen} />
      <Stack.Screen name={homeRoutes.Second} component={SecondScreen} />
    </Stack.Navigator>
  );
};
