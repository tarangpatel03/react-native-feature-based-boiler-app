export const firebaseErrorMessages: Record<string, string> = {
  // Auth
  'auth/user-not-found': 'No user found with this email',
  'auth/wrong-password': 'Incorrect password',
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Invalid email address',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/operation-not-allowed': 'This operation is not allowed',

  // Phone / OTP
  'auth/invalid-phone-number': 'Invalid phone number',
  'auth/invalid-verification-code': 'Invalid verification code',
  'auth/code-expired': 'Verification code expired',
  'auth/too-many-requests': 'Too many attempts, try again later',

  // Session
  'auth/requires-recent-login': 'Please login again',
  'auth/user-token-expired': 'Session expired, please login again',
  'auth/no-current-user': 'Please login again',

  // Network
  'auth/network-request-failed': 'No internet connection',
};
