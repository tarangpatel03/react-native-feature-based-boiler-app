import { useMemo } from 'react';
import { AppTextProps, normalize } from '@/shared';
import { StyleSheet, Text, TextStyle } from 'react-native';

export const BAAppText = ({
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
