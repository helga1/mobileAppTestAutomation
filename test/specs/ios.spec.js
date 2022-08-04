const openSweepstakeScreen = require('../screenObjects/ios/openSweepScreen')
const sweepScreen = require('../screenObjects/ios/sweepList')

describe ('IOS test', () =>{
    it('Verify that sweepstake has at least 1 donation card', async () => {
        await sweepScreen.openSweep.click()
        await driver.setImplicitTimeout(5000)
        const b = await openSweepstakeScreen.firstDonationVariant.length
        expect(b).toBe(1)
    })
})

