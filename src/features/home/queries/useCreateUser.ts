import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../services/postApi';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      // ✅ auto refetch users list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
