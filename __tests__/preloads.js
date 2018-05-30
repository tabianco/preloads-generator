const {
  generateLinks,
  generateScripts,
  setKeys,
  generatePreloads
} = require('../')

describe('setKeys', () => {
  afterEach(() => {
    setKeys({
      links: 'links',
      scripts: 'scripts'
    })
  })

  test('changes `links` key', () => {
    setKeys({
      links: 'foo-bar-key'
    })

    const items = {
      'foo-bar-key': generateLinks([
        'a',
        'b'
      ]),
      scripts: generateScripts([
        'c',
        'd'
      ])
    }

    generatePreloads(items)

    expect(items)
      .toEqual({
        'foo-bar-key': [
          {
            as: 'style',
            href: 'https://unpkg.com/a/dist/a.css',
            rel: 'preload'
          },
          {
            as: 'style',
            href: 'https://unpkg.com/b/dist/b.css',
            rel: 'preload'
          },
          {
            as: 'script',
            href: 'https://unpkg.com/c/dist/c.js',
            rel: 'preload'
          },
          {
            as: 'script',
            href: 'https://unpkg.com/d/dist/d.js',
            rel: 'preload'
          },
          {
            href: 'https://unpkg.com/a/dist/a.css',
            rel: 'stylesheet'
          },
          {
            href: 'https://unpkg.com/b/dist/b.css',
            rel: 'stylesheet'
          }
        ],
        scripts: [
          {
            src: 'https://unpkg.com/c/dist/c.js',
            type: 'text/javascript'
          },
          {
            src: 'https://unpkg.com/d/dist/d.js',
            type: 'text/javascript'
          }
        ]
      })
  })

  test('changes `scripts` key', () => {
    setKeys({
      scripts: 'foo-bar-key'
    })

    const items = {
      links: generateLinks([
        'a',
        'b'
      ]),
      'foo-bar-key': generateScripts([
        'c',
        'd'
      ])
    }

    generatePreloads(items)

    expect(items)
      .toEqual({
        links: [
          {
            as: 'style',
            href: 'https://unpkg.com/a/dist/a.css',
            rel: 'preload'
          },
          {
            as: 'style',
            href: 'https://unpkg.com/b/dist/b.css',
            rel: 'preload'
          },
          {
            as: 'script',
            href: 'https://unpkg.com/c/dist/c.js',
            rel: 'preload'
          },
          {
            as: 'script',
            href: 'https://unpkg.com/d/dist/d.js',
            rel: 'preload'
          },
          {
            href: 'https://unpkg.com/a/dist/a.css',
            rel: 'stylesheet'
          },
          {
            href: 'https://unpkg.com/b/dist/b.css',
            rel: 'stylesheet'
          }
        ],
        'foo-bar-key': [
          {
            src: 'https://unpkg.com/c/dist/c.js',
            type: 'text/javascript'
          },
          {
            src: 'https://unpkg.com/d/dist/d.js',
            type: 'text/javascript'
          }
        ]
      })
  })
})

describe('generatePreloads', () => {
  test('works with links', () => {
    expect(generatePreloads({
      links: generateLinks([
        'x'
      ])
    }))
      .toEqual({
        links: [
          {
            as: 'style',
            href: 'https://unpkg.com/x/dist/x.css',
            rel: 'preload'
          },
          {
            href: 'https://unpkg.com/x/dist/x.css',
            rel: 'stylesheet'
          }
        ]
      })
  })

  test('works with scripts', () => {
    expect(generatePreloads({
      scripts: generateScripts([
        'x'
      ])
    }))
      .toEqual({
        links: [
          {
            as: 'script',
            href: 'https://unpkg.com/x/dist/x.js',
            rel: 'preload'
          }
        ],
        scripts: [
          {
            src: 'https://unpkg.com/x/dist/x.js',
            type: 'text/javascript'
          }
        ]
      })
  })
})
