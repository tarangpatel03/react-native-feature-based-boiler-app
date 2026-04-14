import {
  check,
  request,
  openSettings,
  RESULTS,
  Permission,
} from 'react-native-permissions';

export async function checkPermission(permission: Permission) {
  const status = await check(permission);
  return status;
}

export async function requestPermission(permission: Permission) {
  const status = await request(permission);
  return status;
}

export async function handlePermission(permission: Permission) {
  const status = await check(permission);

  switch (status) {
    case RESULTS.UNAVAILABLE:
      return { granted: false, reason: 'unavailable' };

    case RESULTS.DENIED: {
      const reqStatus = await request(permission);

      return {
        granted: reqStatus === RESULTS.GRANTED,
        reason: reqStatus,
      };
    }

    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      return { granted: true };

    case RESULTS.BLOCKED:
      await openSettings();
      return { granted: false, reason: 'blocked' };

    default:
      return { granted: false };
  }
}
