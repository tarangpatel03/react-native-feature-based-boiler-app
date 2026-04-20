import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import AppShimmer from './AppShimmer';
import { useTheme } from '@/shared/hooks';
import { Theme } from '@/shared/themes';

type Props = {
  width?: number | string;
  height: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
  children?: React.ReactNode;
  shimmerStyle?: StyleProp<ViewStyle>;
};

const ShimmerBlock = ({
  width = '100%',
  height,
  borderRadius = 8,
  style,
  visible = false,
  children,
  shimmerStyle,
}: Props) => {
  const theme = useTheme<Theme>();

  return (
    <AppShimmer
      visible={visible}
      width={typeof width === 'number' ? width : undefined}
      height={height}
      duration={3000}
      shimmerColors={[
        theme.shimmer.shimmerHighlight,
        theme.shimmer.shimmerBackground,
        theme.shimmer.shimmerHighlight,
      ]}
      shimmerStyle={shimmerStyle}
      style={[
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    >
      {children}
    </AppShimmer>
  );
};

export default ShimmerBlock;
