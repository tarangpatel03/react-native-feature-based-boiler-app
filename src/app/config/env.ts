const isDev = true;

export const ENV = {
  APP_ENV: isDev ? 'development' : 'production',
  X_API_TOKEN: isDev ? '93d147f1-6d37-4256-9888-101c567d18f2' : '',
  API_URL: isDev
    ? 'https://sandbox.discountbrosauctions.com/api'
    : 'https://jsonplaceholder.typicode.com',
  FIREBASE_ENABLED: false,
  AWS_ENABLED: false,
  GOOGLE_WEB_CLIENT_ID: '',
};

// Dummy Endpoints
// GET /users
// GET /posts
// POST /posts
