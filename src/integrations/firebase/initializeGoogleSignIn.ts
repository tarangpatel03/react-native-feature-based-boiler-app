import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { logger } from '@/shared/lib';
import { firebaseGoogleConfig } from './config/firebase.config';

let isGoogleConfigured = false;

export const initializeGoogleSignIn = () => {
  if (isGoogleConfigured) {
    return;
  }

  if (firebaseGoogleConfig.webClientId === '') {
    logger.warn('Google Sign-In webClientId is missing');
    return;
  }

  GoogleSignin.configure({
    webClientId: firebaseGoogleConfig.webClientId,
  });

  isGoogleConfigured = true;
  logger.info('Google Sign-In initialized');
};
