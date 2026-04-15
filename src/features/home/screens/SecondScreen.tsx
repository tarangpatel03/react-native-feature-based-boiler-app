import { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { HomeStackParamList } from '@/app/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';
import { BAPrimaryButton } from '@/shared/components';
import { LoaderHandler, normalize } from '@/shared/utils';

type Props = NativeStackScreenProps<HomeStackParamList, 'Second'>;

export const SecondScreen = ({}: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
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
