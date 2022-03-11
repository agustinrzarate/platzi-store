// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/test/jest/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|styl)$': '<rootDir>/src/test/jest/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
