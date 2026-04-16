import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './navigation.types';
import { HomeNavigator } from '@/features/home';
import { TabIcon } from '@/shared/ui';
import { appAssets } from '@/assets';
import { ImageSourcePropType } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

type TabBarIconProps = {
  icon: ImageSourcePropType | undefined;
  filledIcon: ImageSourcePropType | undefined;
  props: any;
};

const showTabIcon = ({ icon, filledIcon, props }: TabBarIconProps) => {
  return <TabIcon icon={props.focused ? icon : filledIcon} />;
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={'HomeStack'}
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) =>
            showTabIcon({
              filledIcon: appAssets.icons.ic_home,
              icon: appAssets.icons.ic_home_filled,
              props,
            }),
        }}
      />
    </Tab.Navigator>
  );
};
