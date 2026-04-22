import { ENV } from '@/app/config';
// import amplifyConfig from './amplifyconfiguration.json';

export const awsConfig = {
  enabled: ENV.AWS_ENABLED,
  //   amplifyConfig: amplifyConfig as Record<string, unknown>,
};
