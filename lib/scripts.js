const {
  unpkg,
  packageNameRegExp
} = require('unpkg-uri')

module.exports = function generateScripts (items) {
  return items.map(name => ({
    type: 'text/javascript',
    src: packageNameRegExp.test(name) ? unpkg(name) : name
  }))
}
