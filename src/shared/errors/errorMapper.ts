import { AppError, firebaseErrorMessages, httpErrorMessages } from '@/shared';

export function mapErrorToMessage(error: AppError): string {
  // ✅ Firebase mapping
  if (error.code && firebaseErrorMessages[error.code]) {
    return firebaseErrorMessages[error.code];
  }

  // ✅ HTTP mapping
  if (error.status && httpErrorMessages[error.status]) {
    return httpErrorMessages[error.status];
  }

  // ✅ Backend custom message (MOST IMPORTANT)
  if (error.message && error.message.trim().length > 0) {
    return error.message;
  }

  return 'Something went wrong';
}
