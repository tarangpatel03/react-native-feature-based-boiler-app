import { AppError } from './AppError';
import { firebaseErrorMessages, httpErrorMessages } from '@/shared';

export function mapErrorToMessage(error: AppError): string {
  if (error.code && firebaseErrorMessages[error.code]) {
    return firebaseErrorMessages[error.code];
  }

  if (error.status && httpErrorMessages[error.status]) {
    return httpErrorMessages[error.status];
  }

  return error.message || 'Something went wrong';
}
