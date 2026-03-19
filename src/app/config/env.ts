const isDev = true;

export const ENV = {
  APP_ENV: isDev ? 'development' : 'production',
  X_API_TOKEN: isDev ? '' : '',
  API_URL: isDev ? 'https://dev.api.com' : 'https://prod.api.com',
};
