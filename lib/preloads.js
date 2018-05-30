let linksKey = 'links'
let scriptsKey = 'scripts'

exports.setKeys = function setKeys ({ links = linksKey, scripts = scriptsKey }) {
  linksKey = links
  scriptsKey = scripts
}

function preloadItem (as, item) {
  const ret = {
    as,
    href: item.src || item.href,
    rel: 'preload'
  }

  ;[
    'integrity',
    'crossorigin'
  ].forEach(k => {
    if (k in item && item[k]) {
      ret[k] = item[k]
    }
  })

  return ret
}

exports.generatePreloads = function generatePreloads (items) {
  const preloads = []

  ;(items[linksKey] || []).forEach(item => {
    if (item.rel === 'stylesheet' && item.rel !== 'preload') {
      preloads.push(preloadItem('style', item))
    }
  })

  ;(items[scriptsKey] || []).forEach(item => {
    preloads.push(preloadItem('script', item))
  })

  items[linksKey] = preloads.concat(items[linksKey] || [])

  return items
}
