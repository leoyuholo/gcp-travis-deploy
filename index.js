
const unpack = event => {
  const payload = event.data
  return payload.data ? Buffer.from(payload.data, 'base64').toString() : 'World'
}

const travisPubSub = (event, callback) => {
  console.log(`Halo, ${unpack(event)}!`)

  callback()
}

module.exports = {
  unpack,
  travisPubSub
}
