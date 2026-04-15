import { AppError } from './AppError';
import { firebaseErrorMessages } from './mapper/firebaseErrorMessages';
import { httpErrorMessages } from './mapper/httpErrorMessages';

export function mapErrorToMessage(error: AppError): string {
  // Firebase mapping
  if (error.code && firebaseErrorMessages[error.code]) {
    return firebaseErrorMessages[error.code];
  }

  // HTTP mapping
  if (error.status && httpErrorMessages[error.status]) {
    return httpErrorMessages[error.status];
  }

  // Backend custom message
  if (error.message && error.message.trim().length > 0) {
    return error.message;
  }

  return 'Something went wrong';
}
