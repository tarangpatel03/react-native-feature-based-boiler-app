export const httpErrorMessages: Record<number, string> = {
  400: 'Invalid request, please try again',
  401: 'You are not authorized',
  403: 'You do not have permission to perform this action',
  404: 'Requested resource not found',
  408: 'Request timeout, please try again',
  409: 'Conflict occurred, please try again',
  422: 'Invalid input, please check and try again',
  429: 'Too many requests, please try again later',
  500: 'Something went wrong on server',
  502: 'Server error, please try again later',
  503: 'Server is unavailable, please try later',
  504: 'Server timeout, please try again',
};
