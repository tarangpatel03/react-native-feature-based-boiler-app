import { useEffect, useRef, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetwork = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [showOnline, setShowOnline] = useState(false);

  const wasOffline = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sub = NetInfo.addEventListener(state => {
      const currentlyOffline = !state.isConnected;

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

  return {
    isOffline,
    showOnline,
  };
};
