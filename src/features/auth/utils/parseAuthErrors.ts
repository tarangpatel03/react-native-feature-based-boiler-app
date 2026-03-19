export function parseAuthError(error: any): string {
  const code = error?.response?.data?.error_code;

  switch (code) {
    case 'INVALID_PASSWORD':
      return 'Password is incorrect';

    case 'USER_NOT_FOUND':
      return 'User account not found';

    case 'EMAIL_EXISTS':
      return 'This email is already registered';

    default:
      return 'Authentication failed';
  }
}
