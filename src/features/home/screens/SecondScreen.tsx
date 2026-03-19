import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import {
  LoaderHandler,
  normalize,
  PrimaryButton,
  Theme,
  useTheme,
} from '@/shared';
import { BottomTabNavigationParamList } from '@/app/navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<BottomTabNavigationParamList, 'Second'>;

export const SecondScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>{t('SECOND_SCREEN')}</Text>
      <PrimaryButton
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
