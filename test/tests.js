const request = require('request')
const config = require('../config')
const url = require('url')

const apiLink = url.format({
  protocol: 'http',
  hostname: config.parseAddress(config.address),
  port: config.port,
  pathname: '/api/'
})

const genApiLink = (path) => url.resolve(apiLink, path)

describe('API', function () {

  describe('monitor', function () {

    describe('flux process', function () {

      it('wants to create a new task', async () => {
        const res = await asyncRequest({
          method: 'POST',
          uri: genApiLink('task'),
          body: {
            a: 3
          },
          json:true
        })

        console.log( res.body )
      })

      it('start a process')
      it('status process')
      it('status simple process')
      it('stop process')
      it('remove a process config')

    })

  })

})




async function asyncRequest (...args) {
  return new Promise((resolve, reject) => {
    request(...args, (err, res) => {
      if (err) {
        return reject(err)
      } else {
        return resolve(res)
      }
    })
  })
}



