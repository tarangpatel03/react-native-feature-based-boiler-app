import { ENV } from '@/app/config';

export const firebaseConfig = {
  enabled: ENV.FIREBASE_ENABLED,
};

export const firebaseGoogleConfig = {
  webClientId: ENV.GOOGLE_WEB_CLIENT_ID ?? '',
};
