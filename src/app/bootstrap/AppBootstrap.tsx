import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAppInitialization } from './useAppInitialization';
import { RootNavigation } from '@/app/navigation';

const AppBootstrap = () => {
  const { isReady } = useAppInitialization();

  if (!isReady) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return <RootNavigation />;
};

export default AppBootstrap;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
