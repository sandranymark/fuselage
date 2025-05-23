module.exports = {
  preset: 'ts-jest',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};
