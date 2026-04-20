import { AppError } from '../AppError';

export function parseApiError(error: any): AppError {
  if (error.response) {
    const message =
      error.response.data?.message || // backend custom
      error.response.data?.error || // optional fallback
      error.message || // axios fallback
      'Something went wrong';

    return new AppError(message, 'API_ERROR', error.response.status);
  }

  if (error.request) {
    return new AppError('No internet connection', 'NETWORK_ERROR');
  }

  return new AppError(error?.message || 'Unexpected error', 'UNKNOWN_ERROR');
}
