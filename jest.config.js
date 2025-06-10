const iOS = require('jest-expo/ios/jest-preset')
const android = require('jest-expo/android/jest-preset')

// TODO: Clean-up.

// const baseConfig = {
//   transform: {
//     '\\.[jt]sx?$': ['babel-jest', { configFile: './babel-jest.config.js' }]
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry|react-native-web/.*)'
//   ],
//   testPathIgnorePatterns: [
//     '<rootDir>/.next/',
//     '<rootDir>/node_modules/',
//   ]
// }

module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './babel-jest.config.js' }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|escape-string-regexp|expo-router|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry|react-native|@react-native|react-error-boundary/.*)'
  ],
  // projects: [
  //   {
  //     ...iOS,
  //     ...baseConfig
  //   },
  //   {
  //     ...android,
  //     ...baseConfig
  //   },
  //   {
  //     displayName: 'Web',
  //     // preset: 'react-native-web',
  //     // This is brittle, we did this so snapshot naming/modifying is consistent
  //     snapshotResolver: 'jest-expo/src/snapshot/resolver.web.js',
  //     moduleNameMapper: {
  //       "^react-native$": "react-native-web"
  //     },
  //     preset: './node_modules/jest-expo/jest-preset.js',
  //     ...baseConfig
  //   }
  // ],
};
