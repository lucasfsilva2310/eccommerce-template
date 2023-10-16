module.exports = {
  // script sequence runner
  //  Prettier then lint into TS and JS files
  '*.{js,jsx,ts,tsx^}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
  ]
}
