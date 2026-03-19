import { mapErrorToMessage } from './errorMapper';
import { parseApiError } from './parser/apiErrorParser';

export function handleApiError(error: any): string {
  const parsed = parseApiError(error);
  return mapErrorToMessage(parsed);
}
