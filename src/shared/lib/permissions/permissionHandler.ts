import { AppPermissions } from './permissionTypes';
import { handlePermission } from './permissionService';

export async function requestCameraPermission(showErrorToast: (msg: string) => void) {
  const res = await handlePermission(AppPermissions.CAMERA!);

  if (!res.granted) {
    showErrorToast(getMessage(res.reason));
  }

  return res.granted;
}

export async function requestPhotoPermission(showErrorToast: (msg: string) => void) {
  const res = await handlePermission(AppPermissions.PHOTO!);

  if (!res.granted) {
    showErrorToast(getMessage(res.reason));
  }

  return res.granted;
}

export async function requestLocationPermission(showErrorToast: (msg: string) => void) {
  const res = await handlePermission(AppPermissions.LOCATION!);

  if (!res.granted) {
    showErrorToast(getMessage(res.reason));
  }

  return res.granted;
}

function getMessage(reason?: string) {
  switch (reason) {
    case 'blocked':
      return 'Permission blocked, please enable from settings';
    case 'denied':
      return 'Permission denied';
    case 'unavailable':
      return 'Permission not available on this device';
    default:
      return 'Permission required';
  }
}

// Usage example:
// const granted = await requestCameraPermission();

// if (granted) {
//   openCamera();
// }
