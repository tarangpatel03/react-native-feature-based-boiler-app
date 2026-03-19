import {
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import { useMemo } from 'react';
import { BaseTheme, normalize, useTheme } from '@/shared';

interface BAButtonProps extends TouchableOpacityProps {
  buttonText: string;
  textStyle: StyleProp<TextStyle>;
}

export const PrimaryButton = (props: BAButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container])}
      onPress={props.onPress}
    >
      <Text style={StyleSheet.flatten([props.textStyle])}>
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: BaseTheme) => {
  return StyleSheet.create({
    container: {
      padding: normalize(10),
      borderRadius: normalize(8),
      backgroundColor: theme.colors.primaryText + '80',
    },
  });
};
