import { AppPermissions } from './permissionTypes';
import { handlePermission } from './permissionService';
import { showErrorToast } from '@/shared';

export async function requestCameraPermission() {
  const res = await handlePermission(AppPermissions.CAMERA!);

  if (!res.granted) {
    showErrorToast(getMessage(res.reason));
  }

  return res.granted;
}

export async function requestPhotoPermission() {
  const res = await handlePermission(AppPermissions.PHOTO!);

  if (!res.granted) {
    showErrorToast(getMessage(res.reason));
  }

  return res.granted;
}

export async function requestLocationPermission() {
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
