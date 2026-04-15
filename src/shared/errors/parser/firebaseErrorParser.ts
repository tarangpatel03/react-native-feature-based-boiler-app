import { AppError } from '../AppError';

export function parseFirebaseError(error: any): AppError {
  return new AppError(error?.message || 'Something went wrong', error?.code, undefined);
}
