import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { AppColors } from '@/shared/themes';
import { normalize } from '@/shared/lib';

export const GlobalLoader = () => {
  const loadingCount = useSelector((state: RootState) => state.LOADER.loadingCount);

  if (loadingCount === 0) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size={'large'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  activityIndicatorWrapper: {
    backgroundColor: AppColors.WHITE,
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
