import { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { HomeStackParamList } from '@/app/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';
import { BAOutlineButton } from '@/shared/components';
import { normalize } from '@/shared/utils';

type Props = NativeStackScreenProps<HomeStackParamList, 'Second'>;

export const SecondScreen = ({ navigation }: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <BAOutlineButton
        buttonText={'Go Back'}
        textStyle={styles.buttonText}
        onPress={navigation.goBack}
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
