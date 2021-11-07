/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',  
  moduleNameMapper: {
    "@docs/(.*)": [
      "<rootDir>/docs/$1"
    ],
    "@root/(.*)": [
      "<rootDir>/src/$1"
    ],
    "@shared/(.*)": [
      "<rootDir>/src/shared/$1"
    ],
  }
};
