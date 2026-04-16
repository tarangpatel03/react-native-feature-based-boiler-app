import { baseRequest } from '@/shared/network';

export const createUser = (data: { name: string; email: string }) => {
  return baseRequest({
    method: 'POST',
    url: '/users',
    data,
  });
};
