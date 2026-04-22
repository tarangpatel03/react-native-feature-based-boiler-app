import { HomeStackParamList } from '../navigation';
import { UserActions } from '@/entities/user';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useBottomSheet, useTheme } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';
import { ThemeModeOptions } from '@/shared/types';
import {
  AppScreen,
  BAOutlineButton,
  BAPrimaryButton,
  BaseBottomSheet,
} from '@/shared/ui';
import { LoaderHandler, normalize } from '@/shared/lib';
import { showErrorToast, showInfoToast, showSuccessToast } from '@/shared/toast';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const sheet = useBottomSheet<{ orderId: string }, boolean>();

  const goToSecond = () => {
    // For Same Stack Navigation
    navigation.navigate('Second');

    // For Cross Stack Navigation
    // navigation.getParent()?.navigate('HomeStack', {
    //   screen: 'Second',
    //   params: { id: '123' }, // Optional
    // });
  };

  return (
    <AppScreen contentContainerStyle={styles.container}>
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
    </AppScreen>
  );
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: normalize(10),
      alignItems: 'center',
      justifyContent: 'center',
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
