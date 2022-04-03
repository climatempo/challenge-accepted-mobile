module.exports = {
  presets: [['module:metro-react-native-babel-preset'], ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',],
  plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }]]
};
