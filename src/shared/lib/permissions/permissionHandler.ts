import { AppPermissions } from './permission.types';
import { handlePermission } from './permissionService';

export async function requestCameraPermission(showErrorToast: (msg: string) => void) {
  const res = await handlePermission(AppPermissions.CAMERA!);

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
