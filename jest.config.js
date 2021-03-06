module.exports = {
  coverageDirectory: './coverage/',
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  roots: [
    '<rootDir>/packages',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
  ],
  preset: 'ts-jest',
};
