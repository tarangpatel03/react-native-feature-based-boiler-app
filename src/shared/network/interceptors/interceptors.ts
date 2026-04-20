import { store } from '@/app/store';
import { apiClient, retryQueue } from '@/shared/network';
import { logger } from '@/shared/lib';
import { errorHandler } from '@/shared/errors';

console.log('interceptor file loaded');

apiClient.interceptors.request.use(
  (config) => {
    if (__DEV__) {
      logger.debug('API Request', {
        url: config.url,
        method: config.method,
        data: config.data,
        params: config.params,
      });
    }

    const token = store.getState().AUTH?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    logger.error('API Error', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });

    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      // logger.debug('API Response', {
      //   url: response.config.url,
      //   status: response.status,
      //   data: response.data,
      // });
      logger.debug('API Response', {
        url: response.config.url,
        status: response.status,
        dataPreview: Array.isArray(response.data)
          ? `Array(${response.data.length})`
          : response.data,
      });
    }
    return response;
  },
  (error) => {
    logger.error('API Error', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });
    const config = error.config;

    if (config?._retry) {
      return Promise.reject(error);
    }

    const isNetworkError = !error.response;
    if (isNetworkError) {
      config._retry = true;
      return new Promise((resolve, reject) => {
        retryQueue.add({ config, resolve, reject });
      });
    }
    errorHandler(error);
    return Promise.reject(error);
  },
);
