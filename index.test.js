const { unpack } = require('.')

describe('index', () => {
  test('unpack', () => {
    const event = {
      data: {
        data: Buffer.from('Travis')
      }
    }

    expect(unpack(event)).toEqual('Travis')
  })
})
