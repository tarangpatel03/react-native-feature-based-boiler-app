// import { Amplify } from 'aws-amplify';
import { logger } from '@/shared/lib';
import { awsConfig } from './config/aws.config';

let isInitialized = false;

export const initializeAws = () => {
  if (!awsConfig.enabled) {
    logger.info('AWS Amplify disabled via ENV');
    return;
  }

  if (isInitialized) {
    return;
  }

  // Amplify.configure(awsConfig.amplifyConfig);
  isInitialized = true;

  logger.info('AWS Amplify initialized');
};
