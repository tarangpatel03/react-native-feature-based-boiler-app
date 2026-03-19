import { useMemo } from 'react';
import { normalize, Theme, useTheme } from '@/shared';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

type Props = {
  icon: ImageSourcePropType | undefined;
};

export const TabIcon = (props: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Image source={props.icon} style={StyleSheet.flatten([styles.icon])} />
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: normalize(24),
      height: normalize(24),
      tintColor: theme.colors.primaryText,
    },
  });
