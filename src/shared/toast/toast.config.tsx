import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalize } from '@/shared/lib';
import { useTheme } from '../hooks';
import { AppColors, Theme } from '../themes';

const BaseToast = ({
  text1,
  type,
}: {
  text1: string;
  type: 'success' | 'error' | 'info';
}) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const getStyle = () => {
    switch (type) {
      case 'success':
        return styles.successContainer;
      case 'error':
        return styles.errorContainer;
      case 'info':
        return styles.infoContainer;
      default:
        break;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'success':
        return styles.successText;
      case 'error':
        return styles.errorText;
      case 'info':
        return styles.infoText;
      default:
        break;
    }
  };

  return (
    <View style={[styles.container, getStyle()]}>
      <View style={styles.content}>
        <Text style={[styles.text, getTextStyle()]}>{text1}</Text>
      </View>
    </View>
  );
};

export let bottomInset = 0;

export const setToastBottomInset = (value: number) => {
  bottomInset = value;
};

export const toastConfig = {
  success: (props: any) => <BaseToast {...props} type={'success'} />,
  error: (props: any) => <BaseToast {...props} type={'error'} />,
  info: (props: any) => <BaseToast {...props} type={'info'} />,
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '90%',
      borderRadius: 12,
      padding: normalize(12),
      borderLeftWidth: 4,
      alignSelf: 'center',

      // Android elevation
      elevation: 4,

      // iOS shadow
      shadowColor: AppColors.APP_000000,
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: normalize(14),
      fontWeight: '500',
    },
    successContainer: {
      backgroundColor: theme.toast.success.background,
      borderLeftColor: theme.toast.success.primary,
    },
    errorContainer: {
      backgroundColor: theme.toast.error.background,
      borderLeftColor: theme.toast.error.primary,
    },
    infoContainer: {
      backgroundColor: theme.toast.info.background,
      borderLeftColor: theme.toast.info.primary,
    },
    successText: {
      color: theme.toast.success.text,
    },
    errorText: {
      color: theme.toast.error.text,
    },
    infoText: {
      color: theme.toast.info.text,
    },
  });
