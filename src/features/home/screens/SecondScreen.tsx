import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { LoaderHandler, normalize, BAPrimaryButton, Theme, useTheme } from '@/shared';
import { HomeStackParamList } from '@/app/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Second'>;

export const SecondScreen = ({}: Props) => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>{t('SECOND_SCREEN')}</Text>
      <BAPrimaryButton
        buttonText={'Show loader'}
        textStyle={styles.buttonText}
        onPress={() => {
          LoaderHandler.showLoader();
          setTimeout(() => LoaderHandler.hideLoader(), 2000);
        }}
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
