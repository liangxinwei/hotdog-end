module.exports = {
  'src/**/*.{json,css,scss,md}': ['prettier --write'],
  'src/**/*.{ts}': [
    'eslint --fix',
    'prettier --write',
  ],
};
