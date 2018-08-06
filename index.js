const objGet = require('lodash.get')
const uuidv4 = require('uuid/v4')

const unpack = event => {
  const payload = objGet(event, 'data.data')
  return payload ? Buffer.from(payload, 'base64').toString() : 'World'
}

const travisPubSub = (event, callback) => {
  console.log(`Halo, ${unpack(event)}! ${uuidv4()}`)

  callback()
}

module.exports = {
  unpack,
  travisPubSub
}
