
// see file ./GIT_COMMIT.md
const types = [
  'feat',
  'update',
  'remove',
  'fix',
  'ci',
  'docs',
  'perf',
  'refactor',
  'test',
  'revert',
  'chore',
];

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-case': [0],
    'scope-empty': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
  },
};
