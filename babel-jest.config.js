module.exports = function babelJestConfig (api) {
  api.cache(true)
  return {
    // presets: ['@babel/preset-env', 'babel-preset-expo', '@expo/next-adapter/babel'],
    presets: [
      [
        '@babel/preset-env',
        // {
        //   // "loose": false,
        //   // "shippedProposals": true
        // }
      ],
      [
        'babel-preset-expo',
        { loose: true },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        '@babel/plugin-proposal-class-properties',
        { loose: true },
      ],
      // ["module-resolver", {
      //   "alias": {
      //     "^react-native$": "react-native-web"
      //   }
      // }]
    ],
  }
};
