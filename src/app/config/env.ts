const isDev = true;

export const ENV = {
  APP_ENV: isDev ? 'development' : 'production',
  X_API_TOKEN: isDev ? '' : '',
  API_URL: isDev
    ? 'https://jsonplaceholder.typicode.com'
    : 'https://jsonplaceholder.typicode.com',
};

// Dummy Endpoints
// GET /users
// GET /posts
// POST /posts
