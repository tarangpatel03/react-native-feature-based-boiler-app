import { ENV } from '@/app/config';

const isDev = ENV.APP_ENV === 'development';
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

type LogPayload = {
  message: string;
  data?: any;
};

const format = (level: LogLevel, payload: LogPayload) => {
  return `[${level.toUpperCase()}] ${payload.message}`;
};

const log = (level: LogLevel, payload: LogPayload) => {
  if (isDev) {
    const formatted = format(level, payload);

    switch (level) {
      case 'info':
        console.log(formatted, payload.data ?? '');
        break;
      case 'warn':
        console.warn(formatted, payload.data ?? '');
        break;
      case 'error':
        console.error(formatted, payload.data ?? '');
        break;
      case 'debug':
        console.log(formatted, payload.data ?? '');
        break;
    }
  }

  // 👉 PROD: only error (can extend later)
  else {
    if (level === 'error') {
      console.error(payload.message, payload.data);
      // future: send to Sentry
    }
  }
};

export const logger = {
  info: (message: string, data?: any) => log('info', { message, data }),

  warn: (message: string, data?: any) => log('warn', { message, data }),

  error: (message: string, data?: any) => log('error', { message, data }),

  debug: (message: string, data?: any) => log('debug', { message, data }),
};
