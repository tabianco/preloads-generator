const generateLinks = require('../lib/links')

describe('generateLinks', () => {
  test('works with package name', () => {
    expect(generateLinks([
      'some-package[min.css]'
    ]))
      .toEqual([{
        rel: 'stylesheet',
        href: 'https://unpkg.com/some-package/dist/some-package.min.css'
      }])
  })

  test('works with url', () => {
    expect(generateLinks([
      '/some-local.min.css'
    ]))
      .toEqual([{
        rel: 'stylesheet',
        href: '/some-local.min.css'
      }])
  })
})
