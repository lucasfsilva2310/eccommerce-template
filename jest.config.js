module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // Should only be tested in e2e
    '!src/lib/styledComponents/registry.tsx', // Ignoring global style component from styled components
    '!src/types/**', // Ignoring all files inside types folder
    '!src/styles/**' // Ignoring all files inside styles folder
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Load setup.ts file before tests
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}
