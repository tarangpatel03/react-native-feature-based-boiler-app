import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '@/shared/hooks';
import { AppColors } from '@/shared/themes';

export const OfflineBanner = () => {
  const { isOffline, showOnline } = useNetwork();

  if (!isOffline && !showOnline) return null;

  return (
    <View style={[styles.banner, isOffline ? styles.offline : styles.online]}>
      <Text style={styles.text}>
        {isOffline ? 'No Internet Connection' : 'Back Online'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 8,
  },
  offline: {
    backgroundColor: 'red',
  },
  online: {
    backgroundColor: 'green',
  },
  text: {
    color: AppColors.WHITE,
    textAlign: 'center',
  },
});
