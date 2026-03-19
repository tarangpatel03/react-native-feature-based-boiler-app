import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setUserData } from '@/features/user';
import {
  PrimaryButton,
  Theme,
  ThemeModeOptions,
  normalize,
  useTheme,
} from '@/shared';
import { StyleSheet, Text } from 'react-native';
import { BottomTabNavigationParamList } from '@/app/navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<BottomTabNavigationParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const switchToDarkMode = () => {
    dispatch(setUserData({ currentThemeMode: ThemeModeOptions.Dark }));
  };
  const switchToLightMode = () => {
    dispatch(setUserData({ currentThemeMode: ThemeModeOptions.Light }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>{t('HOME_SCREEN')}</Text>
      <PrimaryButton
        buttonText={'Light Mode'}
        textStyle={styles.buttonText}
        onPress={switchToLightMode}
      />
      <PrimaryButton
        buttonText={'Dark Mode'}
        textStyle={styles.buttonText}
        onPress={switchToDarkMode}
      />
    </SafeAreaView>
  );
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: normalize(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    buttonText: {
      color: theme.colors.primaryText,
    },
  });
};
