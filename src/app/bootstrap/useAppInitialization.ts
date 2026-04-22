import { useEffect, useState } from 'react';
import { logger } from '@/shared/lib';
import { initializeFirebase, initializeGoogleSignIn } from '@/integrations/firebase';
import { initializeAws } from '@/integrations/aws';

export const useAppInitialization = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        logger.info('App initialization started');

        initializeFirebase();
        initializeGoogleSignIn();
        initializeAws();
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
