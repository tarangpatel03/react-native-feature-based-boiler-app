import { baseRequest } from '@/shared/network';

export const getUsers = () => {
  // (): Promise<ApiResponse<{your type}>> => { // * For normal response
  // (): Promise<ApiResponse<ListPayload<{your type}>>> => { // * For Paginated list
  return baseRequest({
    method: 'GET',
    url: '/users',
  });
};
