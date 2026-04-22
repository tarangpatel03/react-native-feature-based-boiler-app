import { useMemo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { normalize } from '@/shared/lib';
import { AppTextProps } from '@/shared/types';

export const AppText = ({
  children,
  weight = '500',
  fontSize = normalize(16),
  color,
  style,
  ...rest
}: AppTextProps) => {
  const textStyle = useMemo(() => {
    return {
      fontWeight: weight,
      fontSize,
      color,
    } as TextStyle;
  }, [weight, fontSize, color]);

  return (
    <Text {...rest} style={StyleSheet.flatten([textStyle, style])}>
      {children}
    </Text>
  );
};
