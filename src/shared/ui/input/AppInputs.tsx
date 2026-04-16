import React, { forwardRef, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  Pressable,
} from 'react-native';
import { useTheme } from '@/shared/hooks';
import { Theme } from '@/shared/themes/LightTheme';

type Props = TextInputProps & {
  label?: string;
  error?: string | null;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'outlined' | 'filled';
  isPassword?: boolean;
};

export const AppInput = forwardRef<TextInput, Props>(
  (
    {
      label,
      error,
      style,
      leftIcon,
      rightIcon,
      variant = 'outlined',
      isPassword,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme<Theme>();
    const styles = createStyles(theme);
    const [isFocused, setIsFocused] = useState(false);
    const [secure, setSecure] = useState(!!isPassword);

    const borderColor = error
      ? theme.input.error
      : isFocused
      ? theme.input.focusBorder
      : theme.input.border;

    const backgroundColor =
      variant === 'filled' ? theme.input.filledBackground : theme.input.background;

    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View
          style={[
            styles.inputWrapper,
            {
              borderColor,
              backgroundColor,
            },
          ]}
        >
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <TextInput
            ref={ref}
            style={[styles.input, style]}
            placeholderTextColor={theme.input.placeholder}
            secureTextEntry={secure}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={() => setSecure((prev) => !prev)}>
              <Text style={styles.toggle}>{secure ? 'Show' : 'Hide'}</Text>
            </Pressable>
          ) : (
            rightIcon && <View style={styles.icon}>{rightIcon}</View>
          )}
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  },
);

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
      width: '100%',
    },
    label: {
      marginBottom: 6,
      fontSize: 14,
      color: theme.input.label,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 12,
      width: '100%',
    },
    input: {
      flex: 1,
      height: 48,
      fontSize: 16,
      color: theme.input.text,
      minWidth: 0,
    },
    icon: {
      marginHorizontal: 6,
    },
    toggle: {
      color: theme.input.focusBorder,
      fontSize: 12,
    },
    error: {
      marginTop: 4,
      fontSize: 12,
      color: theme.input.error,
    },
  });
