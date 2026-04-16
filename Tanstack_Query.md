## TanStack Query – Generic API Integration Guide

This is a generic, reusable process to implement any API (GET, POST, PUT, DELETE) using TanStack Query in your React Native project.

### 🧩 Core Idea

For any API, you always follow:

```
1. Create API function (calls baseRequest)
2. Create Query/Mutation hook
3. Use in component
```

---

### 1️⃣ GET API (Fetch Data)

**Step 1: API Function**

```ts
export const fetchData = () => {
  return baseRequest({
    method: 'GET',
    url: '/endpoint',
  });
};
```

**Step 2: Query Hook**

```ts
import { useQuery } from '@tanstack/react-query';

export const useFetchData = () => {
  return useQuery({
    queryKey: ['endpoint'], // unique key
    queryFn: fetchData,
  });
};
```

**Step 3: Use in Component**

```ts
const { data, isLoading, error, refetch } = useFetchData();

// For manual refetch
const handleApiCall = async () => {
  const res = await refetch();

  if (res.data) {
    showSuccessToast(`Fetched ${res.data} users`);
  }

  if (res.error) {
    showErrorToast('Something went wrong');
  }
};
```

---

### 2️⃣ POST API (Create Data)

**Step 1: API Function**

```ts
export const createData = (payload) => {
  return baseRequest({
    method: 'POST',
    url: '/endpoint',
    data: payload,
  });
};
```

**Step 2: Mutation Hook**

```ts
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createData,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['endpoint'] });
    },
  });
};
```

**Step 3: Use in Component**

```ts
const { mutate, isPending } = useCreateData();

mutate(payload, {
  onSuccess: () => {},
  onError: () => {},
});
```

---

### 3️⃣ PUT / PATCH API (Update Data)

**Step 1: API Function**

```ts
export const updateData = ({ id, payload }) => {
  return baseRequest({
    method: 'PUT', // or PATCH
    url: `/endpoint/${id}`,
    data: payload,
  });
};
```

**Step 2: Mutation Hook**

```ts
export const useUpdateData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateData,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['endpoint'] });
    },
  });
};
```

**Step 3: Use in Component**

```ts
const { mutate } = useUpdateData();

mutate({
  id: 1,
  payload: { name: 'Updated' },
});
```

---

### 4️⃣ DELETE API

**Step 1: API Function**

```ts
export const deleteData = (id) => {
  return baseRequest({
    method: 'DELETE',
    url: `/endpoint/${id}`,
  });
};
```

**Step 2: Mutation Hook**

```ts
export const useDeleteData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteData,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['endpoint'] });
    },
  });
};
```

**Step 3: Use in Component**

```ts
const { mutate } = useDeleteData();

mutate(id);
```

---

### 🔁 Auto Refetch Logic

```ts
queryClient.invalidateQueries({ queryKey: ['endpoint'] });
```

✔ Marks old data as stale

✔ Automatically refetches active queries

---

### 🧠 Key Rules (Important)

**1. Query Keys**

```
['products']          // list
['product', id]       // detail
['orders', userId]    // filtered
```

**2. Naming Convention**

| Type | Naming                          |
| ---- | ------------------------------- |
| API  | getX, createX, updateX, deleteX |
| Hook | useX, useCreateX, etc.          |

**3. No try/catch in UI**

```ts
try {
  await apiCall();
} catch {}
```

✅ Use:

```ts
mutate(data, { onError, onSuccess });
```

**4. Where to put files**

```code
features/
  <feature>/
    api/       → API functions
    queries/   → React Query hooks
```

**5. When to use what**

| Action     | Hook        |
| ---------- | ----------- |
| Fetch data | useQuery    |
| Create     | useMutation |
| Update     | useMutation |
| Delete     | useMutation |

---

### 🚀 Minimal Mental Model

```
GET    → useQuery
POST   → useMutation
PUT    → useMutation
DELETE → useMutation

Mutation success → invalidateQueries → refetch
```

---

### 🎯 Checklist (for any new API)

```
[ ] Create API function
[ ] Create query/mutation hook
[ ] Add queryKey
[ ] Use in component
[ ] Add invalidateQueries (for mutations)
```

---

## Optimistic Update

Ex:

```ts
// features/user/queries/useDeleteUser.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/deleteUser';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    // 1. Optimistic update
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });

      const previousUsers = queryClient.getQueryData(['users']);

      queryClient.setQueryData(['users'], (old: any[]) =>
        old?.filter((user) => user.id !== id),
      );

      return { previousUsers };
    },

    // 2. Rollback if failed
    onError: (_err, _id, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers);
    },

    // 3. Sync with server
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
```

### 🧠 What’s happening

| Step      | Action                |
| --------- | --------------------- |
| onMutate  | remove user instantly |
| onError   | restore old data      |
| onSettled | refetch from server   |

### ⚠️ Important

- Only use when UI change is predictable
- Always keep rollback (onError)
- Don’t overuse for complex flows
