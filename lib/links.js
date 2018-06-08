const {
  unpkg,
  packageNameRegExp
} = require('unpkg-uri')

module.exports = function generateLinks (items) {
  return items.map(item => {
    const isObject = typeof item === 'object' && item !== null
    const name = isObject ? item.name || item.href : item

    return Object.assign({
      rel: 'stylesheet',
      href: packageNameRegExp.test(name) ? unpkg(name, {
        ext: 'css'
      }) : name
    }, isObject ? item : {})
  })
}
