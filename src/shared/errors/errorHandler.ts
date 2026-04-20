import { showErrorToast } from '../toast';
import { mapErrorToMessage } from './errorMapper';
import { parseApiError } from './parser/apiErrorParser';
import { parseFirebaseError } from './parser/firebaseErrorParser';

export function errorHandler(error: any) {
  let message = 'Something went wrong';

  try {
    // API
    if (error?.response || error?.request) {
      const parsed = parseApiError(error);
      message = mapErrorToMessage(parsed);
    }

    // Firebase
    else if (error?.code && typeof error.code === 'string') {
      const parsed = parseFirebaseError(error);
      message = mapErrorToMessage(parsed);
    }

    // JS Error
    else if (error instanceof Error) {
      message = error.message;
    }

    // String fallback
    else if (typeof error === 'string') {
      message = error;
    }
  } catch {
    message = 'Something went wrong';
  }

  showErrorToast(message);
}
