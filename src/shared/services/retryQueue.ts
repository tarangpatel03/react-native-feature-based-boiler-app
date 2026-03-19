type QueueItem = {
  resolve: (value: any) => void;
  reject: (error: any) => void;
  config: any;
};

let queue: QueueItem[] = [];

export const retryQueue = {
  add: (item: QueueItem) => {
    queue.push(item);
  },

  run: async (apiClient: any) => {
    const pending = [...queue];
    queue = [];

    for (const item of pending) {
      try {
        const res = await apiClient(item.config);
        item.resolve(res);
      } catch (err) {
        item.reject(err);
      }
    }
  },

  clear: () => {
    queue = [];
  },

  size: () => queue.length,
};
