const openSweepstakeScreen = require('../screenObjects/ios/openSweepScreen')
const sweepScreen = require('../screenObjects/ios/sweepList')
const header = require('../screenObjects/ios/header')

describe ('open sweepstake has a donation variant', () => {
    it('Verify that sweepstake has at least 1 donation variant', async () => {
        await sweepScreen.openSweep.click()
        await driver.setImplicitTimeout(5000)
        const b = await openSweepstakeScreen.firstDonationVariant.length
        expect(b).toBe(1)
    })
})

describe ('Verify sweepstake sections', () =>{
    it('Sweepstake hero image', async ()=> {
        expect (await openSweepstakeScreen.sweepstakeHeroImage).toBe(1)
    })
    it('Sweepstake Status', async ()=>{
        expect(await openSweepstakeScreen.sweepstakeStatus).toBe(1)
    })
    it('Sweepstake Details', async () => {
        expect(await  openSweepstakeScreen.sweepstakeDetails).toBe(1)
    })
    it('Sweepstake Prize details', async ()=>{
        expect(await  openSweepstakeScreen.sweepstakePrizeDetails).toBe(1)
    })
    it('Sweepstake charity details', async ()=>{
        expect(await  openSweepstakeScreen.sweepstakeCharityDetails).toBe(1)
    })
    it('Sweepstake donation variants', async ()=>{
        expect(await  openSweepstakeScreen.sweepstakeDonationVariants).toBe(1)

    })

})
describe ( 'Verify header', ()=>{
    it('Verify sweepstake page has a header', async ()=>{
        expect(await header.header).toBe(1)
    })
    }
)


