import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useEffect, useRef, useState } from 'react';
import { AppColors } from '@/shared';

export const OfflineBanner = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [showOnline, setShowOnline] = useState(false);

  const wasOffline = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sub = NetInfo.addEventListener(state => {
      const currentlyOffline = !state.isConnected;

      // came back online
      if (wasOffline.current && !currentlyOffline) {
        setShowOnline(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
          setShowOnline(false);
        }, 2000);
      }

      setIsOffline(currentlyOffline);
      wasOffline.current = currentlyOffline;
    });

    return () => {
      sub();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
