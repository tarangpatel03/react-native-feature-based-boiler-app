import { HomeStackParamList } from '@/app/navigation';
import { setUserData } from '@/features/user/store/userSlice';
import { BAPrimaryButton, normalize, Theme, ThemeModeOptions, useTheme } from '@/shared';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeScreen = ({}: Props) => {
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

  /* const goToSecond = () => {
    // For Same Stack Navigation
    navigation.navigate('Second');

    // For Crross Stack Navigation
    navigation.getParent()?.navigate('HomeStack', {
      screen: 'Second',
      params: { id: '123' }, // Optional
    });
   }; */

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>{t('HOME_SCREEN')}</Text>
      <BAPrimaryButton
        buttonText={'Light Mode'}
        textStyle={styles.buttonText}
        onPress={switchToLightMode}
      />
      <BAPrimaryButton
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
