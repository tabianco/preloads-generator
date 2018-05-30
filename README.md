# preloads-generator
[![Build Status](https://travis-ci.org/tabianco/preloads-generator.svg?branch=master)](https://travis-ci.org/tabianco/preloads-generator)
[![NPM version](https://img.shields.io/npm/v/preloads-generator.svg)](https://www.npmjs.com/package/preloads-generator)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Generates `<link rel="preload">` from links and scripts.

## Install

```
$ npm install --save preloads-generator
```

## Usage

```js
const {
  generateLinks,
  generateScripts,
  setKeys,
  generatePreloads
} = require('preloads-generator')

generateLinks([
  'bootstrap/dist/css/bootstrap.min.css'
])
//=> [ { rel: 'stylesheet',
//       href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' } ]

generateScripts([
  'vue[min.js]'
])
//=> [ { type: 'text/javascript',
//       src: 'https://unpkg.com/vue/dist/vue.min.js' } ]

const items = {
  links: generateLinks([
    'bootstrap/dist/css/bootstrap.min.css'
  ]),
  scripts: generateScripts([
    'vue[min.js]'
  ])
}
//=> { links:
//      [ { rel: 'stylesheet',
//          href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' } ],
//     scripts:
//      [ { type: 'text/javascript',
//          src: 'https://unpkg.com/vue/dist/vue.min.js' } ] }

generatePreloads(items)
//=> { links:
//      [ { as: 'style',
//          href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css',
//          rel: 'preload' },
//        { as: 'script',
//          href: 'https://unpkg.com/vue/dist/vue.min.js',
//          rel: 'preload' },
//        { rel: 'stylesheet',
//          href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' } ],
//     scripts:
//      [ { type: 'text/javascript',
//          src: 'https://unpkg.com/vue/dist/vue.min.js' } ] }
```

## License

MIT © [Tabian Co.](http://tabian.co)
