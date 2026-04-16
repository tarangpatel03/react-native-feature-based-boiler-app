import React, { useMemo } from 'react';
import { Pressable, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import { BaseTheme, ButtonBaseProps } from '@/shared/types';
import { useTheme } from '@/shared/hooks';
import { normalize } from '@/shared/lib';

export const BAPrimaryButton = ({
  buttonText,
  textStyle,
  containerStyle,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  onPress,
  ...rest
}: ButtonBaseProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...rest}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <FastImage style={styles.icon} source={leftIcon} />}

          <Text style={[styles.text, textStyle]}>{buttonText}</Text>

          {rightIcon && <FastImage style={styles.icon} source={rightIcon} />}
        </View>
      )}
    </Pressable>
  );
};

const createStyles = (theme: BaseTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingVertical: normalize(10),
      paddingHorizontal: normalize(14),
      borderRadius: normalize(8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.white,
      fontSize: normalize(14),
      fontWeight: '600',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: normalize(6),
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressed: {
      opacity: 0.7,
    },
    disabled: {
      opacity: 0.5,
    },
  });
