export type UploadImageParams = {
  uri: string;
  fileName?: string;
  contentType?: string;
  folder?: string;
};

export type UploadImageResult = {
  path: string;
  url: string;
};
