// jest.config.js
const { defaults } = require('ts-jest/presets')

module.exports = {
  ...defaults,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|my-project|react-native-button)/)"
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}