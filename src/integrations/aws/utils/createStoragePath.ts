const getFileExtension = (fileName: string) => {
  const parts = fileName.split('.');
  return parts.length > 1 ? parts.pop() : 'jpg';
};

export const createStoragePath = (folder: string, fileName?: string) => {
  const fallbackName = fileName ?? `image-${Date.now()}.jpg`;
  const extension = getFileExtension(fallbackName);
  const safeFolder = folder.replace(/^\/+|\/+$/g, '');

  return `${safeFolder}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${extension}`;
};
