import { HomeStackParamList } from '@/app/navigation';
import { UserActions } from '@/features/user';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useBottomSheet, useTheme, useToast } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';
import { ThemeModeOptions } from '@/shared/types';
import { BAOutlineButton, BAPrimaryButton, BaseBottomSheet } from '@/shared/components';
import { LoaderHandler, normalize } from '@/shared/utils';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const sheet = useBottomSheet<{ orderId: string }, boolean>();
  const { showErrorToast, showSuccessToast, showInfoToast } = useToast();

  const goToSecond = () => {
    // For Same Stack Navigation
    navigation.navigate('Second');

    // For Crross Stack Navigation
    // navigation.getParent()?.navigate('HomeStack', {
    //   screen: 'Second',
    //   params: { id: '123' }, // Optional
    // });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.themeSwitchContainer}>
        <BAOutlineButton
          buttonText={'Light Mode'}
          textStyle={styles.buttonText}
          onPress={() => {
            dispatch(
              UserActions.setUserData({ currentThemeMode: ThemeModeOptions.Light }),
            );
          }}
        />
        <BAOutlineButton
          buttonText={'Dark Mode'}
          textStyle={styles.buttonText}
          onPress={() => {
            dispatch(
              UserActions.setUserData({ currentThemeMode: ThemeModeOptions.Dark }),
            );
          }}
        />
      </View>
      <View style={styles.themeSwitchContainer}>
        <BAOutlineButton
          buttonText={'Show loader'}
          textStyle={styles.buttonText}
          onPress={() => {
            LoaderHandler.showLoader();
            setTimeout(() => LoaderHandler.hideLoader(), 2000);
          }}
        />
        <BAOutlineButton
          buttonText={'Show BottomSheet'}
          textStyle={styles.buttonText}
          onPress={() => sheet.open()}
        />
      </View>
      <View style={styles.themeSwitchContainer}>
        <BAOutlineButton
          buttonText={'Success Toast'}
          textStyle={styles.buttonText}
          onPress={() => showSuccessToast('Success')}
        />
        <BAOutlineButton
          buttonText={'Error Toast'}
          textStyle={styles.buttonText}
          onPress={() => showErrorToast('Error')}
        />
        <BAOutlineButton
          buttonText={'Info Toast'}
          textStyle={styles.buttonText}
          onPress={() => showInfoToast('Info')}
        />
      </View>
      <BaseBottomSheet ref={sheet.ref} onDismiss={sheet.onDismiss}>
        <BAPrimaryButton
          buttonText={'Confirm'}
          onPress={() => {
            showSuccessToast('Success');
            sheet.close();
          }}
        />
        <BAPrimaryButton
          buttonText={'Cancel'}
          onPress={() => {
            showErrorToast('Error');
            sheet.close();
          }}
        />
      </BaseBottomSheet>
      <BAOutlineButton
        buttonText={'Goto Second Screen'}
        textStyle={styles.buttonText}
        onPress={goToSecond}
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
    themeSwitchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: normalize(20),
    },
    buttonText: {
      color: theme.colors.primaryText,
    },
  });
};
