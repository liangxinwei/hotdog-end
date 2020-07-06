const glob = require('glob')

const last = arr => arr[arr.length - 1]

// apps/* 和 packages/* 都是合法的 scope
const scopes = [
  ...glob.sync(`${__dirname}/apps/*`).map(match => last(match.split('/'))),
  'common', // 涉及多个 app 或 package，或者是全局性的改动
  'docs', // docs 文档改动
]

const types = ['add', 'update', 'remove', 'fix']

module.exports = {
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', scopes],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
  },
}
