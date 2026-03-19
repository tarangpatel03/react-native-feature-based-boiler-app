import { AppError } from '../AppError';

export function parseApiError(error: any): AppError {
  if (error.response) {
    return new AppError(
      error.response.data?.message,
      'API_ERROR',
      error.response.status,
    );
  }

  if (error.request) {
    return new AppError('Network error', 'NETWORK_ERROR');
  }

  return new AppError('Unexpected error', 'UNKNOWN_ERROR');
}
