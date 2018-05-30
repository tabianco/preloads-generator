const generateScripts = require('../lib/scripts')

describe('generateScripts', () => {
  test('works with package name', () => {
    expect(generateScripts([
      'some-package'
    ]))
      .toEqual([{
        type: 'text/javascript',
        src: 'https://unpkg.com/some-package/dist/some-package.js'
      }])
  })

  test('works with url', () => {
    expect(generateScripts([
      '/some-local.min.js'
    ]))
      .toEqual([{
        type: 'text/javascript',
        src: '/some-local.min.js'
      }])
  })
})
