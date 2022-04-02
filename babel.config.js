module.exports = {
  presets: [['module:metro-react-native-babel-preset'], ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
};
