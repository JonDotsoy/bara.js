
const {expect} = require('chai')

describe('plugins', function () {
  it('load the plugin', async () => {
    const path = require('path')

    const { scanPlugin, Plugin } = require('../app/plugins/Plugin')

    const plugin = await scanPlugin( './data/examplesPlugins/plugin1', {setupName: 'actionTest'})

    expect( plugin ).to.be.instanceOf( Plugin )
    expect( plugin ).to.have.a.property( 'setup' )
    expect( plugin.setup ).to.be.a('function')
    expect( plugin.setup() ).to.be.eql('plugin1')
  })
})

