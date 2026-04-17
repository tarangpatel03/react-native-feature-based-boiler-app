# TanStack Query Guide

## Mental model

```txt
GET    -> useQuery
POST   -> useMutation
PUT    -> useMutation
PATCH  -> useMutation
DELETE -> useMutation
```

Mutation success usually leads to invalidation:

```ts
queryClient.invalidateQueries({ queryKey: someKeys.lists() });
```

## Recommended flow

1. Create API function in `services/`
2. Create query or mutation hook in `queries/`
3. Create query key factory in `queries/`
4. Use hook in component/screen

## Where to put files

```txt
features/<feature>/
  services/
  queries/

entities/<entity>/
  queries/
```

## Query key factory

Keep keys close to the domain.

Example:

```ts
export const productKeys = {
  all: ["product"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters?: ProductFilters) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};
```

## Query examples

### GET

```ts
export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: () => fetchProducts(filters),
  });
};
```

### POST

```ts
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};
```

## Query key rules

- always start with domain name
- use array keys, not concatenated strings
- keep list and detail keys separate
- include filters in keys
- do not hardcode keys in components

## Optimistic updates

Use only when the UI change is predictable.

Pattern:

1. cancel running queries
2. read previous cache
3. update cache optimistically
4. rollback on error
5. invalidate on settled

## Checklist for any new API

- create API function
- create query/mutation hook
- create or use query key factory
- invalidate related keys for mutations
- keep DTO-to-model mapping out of UI when needed
