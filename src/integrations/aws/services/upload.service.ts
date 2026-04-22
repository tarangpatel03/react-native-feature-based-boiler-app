import { getUrl, uploadData } from 'aws-amplify/storage';
import { UploadImageParams, UploadImageResult } from '../types/aws.types';
import { createStoragePath } from '../utils/createStoragePath';

const uriToBlob = async (uri: string): Promise<Blob> => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};

export const awsUploadService = {
  uploadImage: async ({
    uri,
    fileName,
    contentType = 'image/jpeg',
    folder = 'public/images',
  }: UploadImageParams): Promise<UploadImageResult> => {
    if (!uri) {
      throw new Error('Image uri is required');
    }

    const path = createStoragePath(folder, fileName);
    const fileBlob = await uriToBlob(uri);

    await uploadData({
      path,
      data: fileBlob,
      options: {
        contentType,
      },
    }).result;

    const { url } = await getUrl({
      path,
    });

    return {
      path,
      url: url.toString(),
    };
  },
};

// Usage
// const result = await awsUploadService.uploadImage({
//   uri: image.uri,
//   fileName: image.fileName,
//   contentType: image.type,
//   folder: 'public/profile',
// });
