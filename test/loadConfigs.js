const expect = require('chai').expect

describe('load configs', function () {
  describe('to database', function () {
    it('laod a mogo config', () => {
      const { loadHosts } = require('../config/connectConfig')

      const result = loadHosts({

        A: '',
        B: '',
        C: '',
        D: '',

        NO_SHOW: '',

        DB_HOST: 'url1',
        DB_PORT: '10001',
        DB_HOST2: 'url2',
        DB_PORT2: '10002',
        DB_HOST_3: 'url3',
        DB_PORT_3: '10003',
        DB_HOST_4: 'url4',
        DB_PORT_4: '10004',
        DB_HOST5: 'url5',
        DB_PORT5: '10005',

        // ONLY HOST
        DB_HOST_90: 'url90'

      })

      expect(result).length(6)

      expect(result[0].host).to.be.eql('url1')
      expect(result[0].port).to.be.eql('10001')
      expect(result[1].host).to.be.eql('url2')
      expect(result[1].port).to.be.eql('10002')
      expect(result[2].host).to.be.eql('url3')
      expect(result[2].port).to.be.eql('10003')
      expect(result[3].host).to.be.eql('url4')
      expect(result[3].port).to.be.eql('10004')
      expect(result[4].host).to.be.eql('url5')
      expect(result[4].port).to.be.eql('10005')

      expect(result[5].host).to.be.eql('url90')
      expect(result[5].port).to.be.eql('27017')
    })

    it('Load url mongo', () => {
      const { loadURLMongoDB } = require('../config/connectConfig')

      const result = loadURLMongoDB({
        DB_DATABASE: 'test',
        DB_HOST: 'url1',
        DB_HOST_2: 'url2',
        DB_PORT_2: '10001'
      })

      const result2 = loadURLMongoDB({
        DB_DATABASE: 'test',
        DB_HOST: 'url'
      })

      expect(result).to.be.eql('mongodb://url1:27017,url2:10001/test')
      expect(result2).to.be.eql('mongodb://url:27017/test')
    })

    it.skip('load on default config', () => {
      const config = require('../config')

      console.log(config)
    })
  })
})

