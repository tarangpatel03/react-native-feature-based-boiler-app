import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './navigation.types';
import { HomeNavigator } from '@/features/home';
import { AppText, TabIcon } from '@/shared/ui';
import { appAssets } from '@/assets';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { normalize } from '@/shared/lib';

const Tab = createBottomTabNavigator<BottomTabParamList>();

type TabBarIconProps = {
  icon: ImageSourcePropType | undefined;
  filledIcon: ImageSourcePropType | undefined;
  props: any;
};

const showTabIcon = ({ icon, filledIcon, props }: TabBarIconProps) => {
  return <TabIcon icon={props.focused ? icon : filledIcon} />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showTabLabel = ({ title, props }: { title: string; props: any }) => {
  return <AppText style={styles.font12}>{title}</AppText>;
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingTop: normalize(10) },
      }}
    >
      <Tab.Screen
        name={'HomeStack'}
        component={HomeNavigator}
        options={{
          tabBarLabel: (props) => showTabLabel({ title: 'Home', props }),
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

const styles = StyleSheet.create({
  font12: {
    fontSize: 12,
  },
});
