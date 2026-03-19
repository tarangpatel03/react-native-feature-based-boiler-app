module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/app': './src/app',
          '@/assets': './src/assets',
          '@/features': './src/features',
          '@/shared': './src/shared',
        },
      },
    ],
  ],
};
