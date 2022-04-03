module.exports = {
  roots: ['<rootDir>/src'],
  collectCovergeFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
