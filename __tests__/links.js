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

  test('works with object', () => {
    expect(generateLinks([
      {
        name: 'some-package[min.css]',
        crossorigin: 'anonymous'
      }
    ]))
      .toEqual([{
        rel: 'stylesheet',
        href: 'https://unpkg.com/some-package/dist/some-package.min.css',
        name: 'some-package[min.css]',
        crossorigin: 'anonymous'
      }])
  })

  test('works with object 2', () => {
    expect(generateLinks([
      {
        href: '/some-local.min.css',
        crossorigin: 'anonymous'
      }
    ]))
      .toEqual([{
        rel: 'stylesheet',
        href: '/some-local.min.css',
        crossorigin: 'anonymous'
      }])
  })
})
