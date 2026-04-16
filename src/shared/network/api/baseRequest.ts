import { apiClient } from '@/shared/network';

const shouldFail = () => Math.random() < 0.3;

export const baseRequest = async (config: any) => {
  try {
    if (shouldFail()) {
      throw {
        isAxiosError: true,
        response: {
          status: 500,
          data: { message: 'Random API failure' },
        },
      };
    }

    const res = await apiClient(config);
    return res;
  } catch (error) {
    throw error;
  }
};
