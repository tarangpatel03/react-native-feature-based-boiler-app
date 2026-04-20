import { apiClient } from '@/shared/network';

export const getUsers = async () => {
  // (): Promise<ApiResponse<{your type}>> => { // * For normal response
  // (): Promise<ApiResponse<ListPayload<{your type}>>> => { // * For Paginated list
  const response = await apiClient.get('home');
  return response.data;
};
