const openSweepstakeScreen = require('../screenObjects/ios/openSweepScreen')
const sweepScreen = require('../screenObjects/ios/sweepList')
const header = require('../screenObjects/ios/header')
const authorizationScreen= require('../screenObjects/ios/authorizationScreen')
const winnerAnnouncedSweepstake= require('../screenObjects/ios/winnerAnnouncedSweepScreen')
const openSweep= require('../screenObjects/ios/openSweepstakeScreen')

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

describe.only ('login', ()=>{
    it('login', async ()=>{
        await authorizationScreen.clickLogin()
       // await authorizationScreen.clickContinue()

    })
})

describe ('verify closed sweep page has correct sections', ()=>{
    it('charity details section', async ()=>{
        expect(await winnerAnnouncedSweepstake.getCharityDetailsTitle).toBe('Make A Wish')
    })
    it('who was supported', async()=>{
        expect (await winnerAnnouncedSweepstake.whoWasSupported).toBe('this experience supported')
        }
    )
})

describe ('verify open sweep page has correct', ()=>{
    it('open sweep shoud have details support section', async ()=>{
        expect(await  openSweep.detailsSupportElement).toBe(true)
    }),
    /*it('open sweep should details Body Text', async ()=>{
        expect(await  openSweep()).toBe(true)
    }),

     */
        it('open sweep shoud have details Title', async ()=>{
            expect(await  openSweep.detailsTitle()).toBe(true)
        }),
        it('open sweep shoud have closes Text', async ()=>{
            expect(await  openSweep.closesText).toBe(true)
        })
    it('open sweep shoud have details support section', async ()=>{
        expect(await  openSweep.detailsSupportElement)
    }),
        it('open sweep shoud have detailsTitle', async ()=>{
            expect(await  openSweep.detailsTitle).toBe(true)
        }),
        it('open sweep shoud have winner Announced Title', async ()=>{
            expect(await  openSweep.winnerAnnouncedTitle).toBe(true)
        }),
        it('open sweep shoud have prize Details Title', async ()=>{
            expect(await  openSweep.prizeDetailsTitle).toBe(true)
        }),
        it('open sweep shoud have carousel CardSub title', async ()=>{
            expect(await  openSweep.carouselCardSubtitle).toBe(true)
        }),
        it('open sweep shoud have carousel Card Body', async ()=>{
            expect(await  openSweep.carouselCardBody).toBe(true)
        }),
        it('open sweep shoud have who You Help', async ()=>{
            expect(await  openSweep.whoYouHelp).toBe(true)
        }),
        it('open sweep shoud have carousel Card Body', async ()=>{
            expect(await  openSweep.carouselCardBody).toBe(true)
        }),
        it('open sweep shoud have charity Details Legal', async ()=>{
            expect(await  openSweep.charityDetailsLegal).toBe(true)
        }),
        it('open sweep shoud have carousel Card Body', async ()=>{
            await openSweep.charityDetailsLegal.click()
            expect(await  openSweep.carouselCardBody).toBe(true)
        }),
        it('open sweep shoud have donationVariantsTitle', async ()=>{
            expect(await  openSweep.donationVariantsTitle).toBe(true)
        }),
        it('open sweep shoud have donation Variants', async ()=>{
            expect(await  openSweep.donationVariants).toBe(true)
        }),
        it('open sweep shoud have legal Header', async ()=>{
            expect(await  openSweep.legalHeader).toBe(true)
        }),
        it('open sweep shoud have legal Text', async ()=>{
            expect(await  openSweep.legalText).toBe(true)
        })
    it('amount of donation variants is 5', async ()=>{
        expect(await openSweep.donationCardAmount).toBe(5)
    })




})


