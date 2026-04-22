import firebase from '@react-native-firebase/app';
import { firebaseConfig } from './config/firebase.config';
import { logger } from '@/shared/lib';

let isInitialized = false;

export const initializeFirebase = () => {
  if (!firebaseConfig.enabled) {
    logger.info('Firebase is disabled');
    return;
  }

  if (isInitialized) {
    return;
  }

  if (!firebase.apps.length) {
    // firebase initializes automatically from:
    // google-services.json (android)
    // GoogleService-Info.plist (ios)

    logger.info('Firebase initialized');
  }

  isInitialized = true;
};
