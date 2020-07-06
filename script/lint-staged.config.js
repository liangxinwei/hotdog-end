module.exports = {
  'src/**/*.{json,css,scss,md}': ['prettier --write', 'git add'],
  'src/**/*.{ts}': [
    'eslint --fix',
    'prettier --write',
    'git add',
  ],
};
