import { RootStackParamList } from '@/app/navigation';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: Parameters<typeof navigationRef.navigate<RouteName>>
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}
