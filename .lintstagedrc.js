module.exports = {
  // script sequence runner
  // Prettier then lint into TS and JS files
  // Then run tests
  '*.{js,jsx,ts,tsx^}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
