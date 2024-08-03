import type { Config } from 'jest';

const config: Config = {
  rootDir: '../..',
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/__mocks__/svg.js',
  },
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testMatch: [
    '<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-jest.ts'],
  testEnvironment: 'jsdom',
};

export default config;
