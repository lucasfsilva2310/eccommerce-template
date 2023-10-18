module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // Should only be tested in e2e
    '!src/lib/styledComponents/registry.tsx' // Ignoring global style component from styled components
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Load setup.ts file before tests
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
