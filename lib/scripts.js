const {
  unpkg,
  packageNameRegExp
} = require('unpkg-uri')

module.exports = function generateScripts (items) {
  return items.map(item => {
    const isObject = typeof item === 'object' && item !== null
    const name = isObject ? item.name || item.src : item

    return Object.assign({
      type: 'text/javascript',
      src: packageNameRegExp.test(name) ? unpkg(name) : name
    }, isObject ? item : {})
  })
}
