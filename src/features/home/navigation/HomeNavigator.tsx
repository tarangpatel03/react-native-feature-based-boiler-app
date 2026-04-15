import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SecondScreen } from '../screens';
import { HomeStackParamList } from '@/app/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Second'} component={SecondScreen} />
    </Stack.Navigator>
  );
};
