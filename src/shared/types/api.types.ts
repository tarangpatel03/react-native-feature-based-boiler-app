export interface ApiResponse<T> {
  requestId: string;
  result: boolean;
  statusCode: number;
  message: string;
  payload: T;
}
export interface ListPayload<T> {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
export interface PaginationLinks {
  first?: string;
  last?: string;
  prev?: string | null;
  next?: string | null;
}

export interface PaginationMeta {
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}

export interface MetaLink {
  current?: string;
}
