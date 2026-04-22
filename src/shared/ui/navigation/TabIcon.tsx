import { useMemo } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { AppColors, Theme } from '@/shared/themes';
import { useTheme } from '@/shared/hooks';
import { normalize } from '@/shared/lib';

type Props = {
  title?: string;
  icon: ImageSourcePropType | undefined;
};

export const TabIcon = (props: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Image
        source={props.icon}
        resizeMode={'contain'}
        style={StyleSheet.flatten([styles.icon])}
      />
    </View>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: normalize(12),
    },
    icon: {
      width: normalize(24),
      height: normalize(24),
      tintColor: AppColors.BLACK,
    },
    text: {
      fontSize: 12,
    },
  });
