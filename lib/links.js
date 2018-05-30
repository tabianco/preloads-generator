const {
  unpkg,
  packageNameRegExp
} = require('unpkg-uri')

module.exports = function generateLinks (items) {
  return items.map(name => ({
    rel: 'stylesheet',
    href: packageNameRegExp.test(name) ? unpkg(name, {
      ext: 'css'
    }) : name
  }))
}
