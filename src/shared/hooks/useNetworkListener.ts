import { useEffect, useRef } from 'react';
import { useNetwork } from './useNetwork';
import { apiClient, retryQueue } from '@/shared/services';
import { logger } from '@/shared/utils';

export const useNetworkListener = () => {
  const { isOffline } = useNetwork();
  const prevOffline = useRef(isOffline);

  useEffect(() => {
    if (prevOffline.current && !isOffline && retryQueue.size() > 0) {
      logger.info('Retrying queued requests', {
        count: retryQueue.size(),
      });

      retryQueue.run(apiClient);
    }

    prevOffline.current = isOffline;
  }, [isOffline]);
};
