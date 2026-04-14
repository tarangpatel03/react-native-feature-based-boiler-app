import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;

  /**
   * Extra offset (e.g. header height)
   */
  offset?: number;

  /**
   * Disable behavior (rare cases)
   */
  disabled?: boolean;
}>;

const AppKeyboardAvoidingView = ({
  children,
  style,
  contentContainerStyle,
  offset = 0,
  disabled = false,
}: Props) => {
  const insets = useSafeAreaInsets();

  // ✅ iOS needs padding, Android should rely on adjustResize
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  // ✅ Only apply offset on iOS (Android handles automatically)
  const keyboardVerticalOffset = Platform.OS === 'ios' ? offset + insets.top : 0;

  if (disabled) {
    return <View style={[styles.container, style]}>{children}</View>;
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={[styles.content, contentContainerStyle]}>{children}</View>
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
