export const homeRoutes = {
  Home: 'Home',
  Second: 'Second',
} as const;

export type HomeStackParamList = {
  [homeRoutes.Home]: undefined;
  [homeRoutes.Second]: undefined;
};
