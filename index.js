const rules = {
  'dont-use-javascript': require('./lib/rules/dont-use-javascript'),
  'i-have-a-daughter': require('./lib/rules/i-have-a-daughter'),
  'no-loops': require('./lib/rules/no-loops'),
  'no-array-methods': require('./lib/rules/no-array-methods'),
  'use-triple-equals': require('./lib/rules/use-triple-equals'),
  'use-double-equals': require('./lib/rules/use-double-equals'),
  'no-let-const': require('./lib/rules/no-let-const'),
  'no-ternary': require('./lib/rules/no-ternary'),
  'no-if': require('./lib/rules/no-if'),
  'no-regular-functions': require('./lib/rules/no-regular-functions'),
  'no-arrow-functions': require('./lib/rules/no-arrow-functions'),
  'no-var': require('./lib/rules/no-var'),
  'no-functions': require('./lib/rules/no-functions'),
  'no-classes': require('./lib/rules/no-classes')
}

const rulesAsErrors = Object.fromEntries(
  Object.keys(rules).map((key) => [`replyguy/${key}`, 2])
)

module.exports = {
  rules,
  configs: {
    all: {
      plugins: ['replyguy'],
      rules: rulesAsErrors
    }
  }
}
