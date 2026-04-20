import { useEffect, useState } from 'react';
import { logger } from '@/shared/lib';

export const useAppInitialization = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        logger.info('App initialization started');

        // placeholder for future:
        // - restore auth
        // - load config
        // - prefetch data

        await new Promise((res) => setTimeout(res, 300));
      } catch (e) {
        logger.error('App initialization failed', { error: e });
      } finally {
        setIsReady(true);
      }
    };

    init();
  }, []);

  return { isReady };
};
