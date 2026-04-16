import { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { HomeStackParamList } from '@/app/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme, useToast } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';
import { AppInput, BAOutlineButton } from '@/shared/ui';
import { normalize } from '@/shared/lib';
import { email, minLength, required, useField, useForm } from '@/shared/form';
import { useUsers } from '../queries';
import { useCreateUser } from '../queries/useCreateUser';

type Props = NativeStackScreenProps<HomeStackParamList, 'Second'>;

export const SecondScreen = ({ navigation }: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { showErrorToast, showSuccessToast } = useToast();
  const { isLoading, refetch } = useUsers();
  const { mutate, isPending } = useCreateUser();

  const form = useForm({
    email: {
      value: '',
      validators: [required('Email Required'), email()],
    },
    password: {
      value: '',
      validators: [required('Password Required'), minLength(6)],
    },
  });
  const emailField = useField(form, 'email');
  const passwordField = useField(form, 'password');

  const handleApiCall = async () => {
    const res = await refetch();

    if (res.data) {
      showSuccessToast(`Fetched ${res.data} users`);
    }

    if (res.error) {
      showErrorToast('Something went wrong');
    }
  };

  const handleCreateUser = () => {
    mutate(
      {
        name: 'John Doe',
        email: 'john@example.com',
      },
      {
        onSuccess: () => {
          showSuccessToast('User created');
        },
        onError: () => {
          showErrorToast('Failed to create user');
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BAOutlineButton
        buttonText={'Go Back'}
        textStyle={styles.buttonText}
        onPress={navigation.goBack}
      />
      <AppInput
        label={'Email'}
        value={emailField.value}
        onChangeText={emailField.onChangeText}
        onBlur={emailField.onBlur}
        error={emailField.error}
      />
      <AppInput
        label={'Password'}
        isPassword
        value={passwordField.value}
        onChangeText={passwordField.onChangeText}
        onBlur={passwordField.onBlur}
        error={passwordField.error}
      />
      <BAOutlineButton
        buttonText={isLoading ? 'Loading...' : 'Api Call'}
        textStyle={styles.buttonText}
        onPress={handleApiCall}
      />
      <BAOutlineButton
        buttonText={isPending ? 'Creating...' : 'Create User'}
        textStyle={styles.buttonText}
        onPress={handleCreateUser}
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
      paddingHorizontal: normalize(20),
      backgroundColor: theme.colors.background,
    },
    buttonText: {
      color: theme.colors.primaryText,
    },
  });
};
