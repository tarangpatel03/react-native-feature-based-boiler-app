import { Source } from '@d11/react-native-fast-image';
import { PressableProps, TextProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ButtonBaseProps extends PressableProps {
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: number | Source | undefined;
  rightIcon?: number | Source | undefined;
  loading?: boolean;
  disabled?: boolean;
}

export interface AppTextProps extends TextProps {
  children: React.ReactNode;
  weight?: string;
  fontSize?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}
