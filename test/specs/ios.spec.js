const openSweepstakeScreen = require('../screenObjects/ios/openSweepScreen')
const sweepScreen = require('../screenObjects/ios/sweepList')
const header = require('../screenObjects/ios/header')
const loginScreen= require('../screenObjects/ios/logInScreen')
const winnerAnnouncedSweepstake= require('../screenObjects/ios/winnerAnnouncedSweepScreen')
const winnerPendingSweepstake = require('../screenObjects/ios/winnerPendingScreen')
//const awaitExpect = require("eslint-plugin-wdio/src/rules/await-expect");
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
        await loginScreen.clickLogin()
        await driver.pause(3000)
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

describe ('login', ()=>{
    it('login', async ()=>{
        await authorizationScreen.clickLogin()
        await driver.pause(3000)
        expect(await openSweep.donationCardAmount).toBe(5)
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

describe.only ('verify open sweep page has correct content', ()=>{
    it('open sweep should have details support section', async ()=>{
        await loginScreen.clickLogin()
        expect(await openSweepstakeScreen.detailsSupportElement).toBe(1)
    }),
        it('amount of donation variants is 5', async ()=>{
        expect(await openSweepstakeScreen.donationCardAmount).toBe(5)
    })
    /*it('open sweep should details Body Text', async ()=>{
        expect(await  openSweep()).toBe(true)
    }),
    */
             it('open sweep shoud have details Title', async ()=>{
            //await authorizationScreen.clickLogin()
           // await driver.pause(3000)
            expect(await  openSweepstakeScreen.detailsTitle()).toBe(1)
        }),
            it('open sweep shoud have closes Text', async ()=>{
                expect(await  openSweepstakeScreen.closesText).toBe(1)
            }),
            it('open sweep shoud have details support section', async ()=>{
                expect(await  openSweepstakeScreen.detailsSupportElement).toBe(1)
            }),
            it('open sweep shoud have detailsTitle', async ()=>{
            expect(await  openSweepstakeScreen.detailsTitle).toBe(1)
            }),
            it('open sweep shoud have winner Announced Title', async ()=>{
            expect(await  openSweepstakeScreen.winnerAnnouncedTitle).toBe(1)
        }),
            it('open sweep shoud have prize Details Title', async ()=>{
            expect(await  openSweepstakeScreen.prizeDetailsTitle).toBe(1)
        }),
            it('open sweep shoud have carousel CardSub title', async ()=>{
            expect(await  openSweepstakeScreen.carouselCardSubtitle).toBe(1)
        }),
            it('open sweep shoud have carousel Card Body', async ()=>{
            expect(await  openSweepstakeScreen.carouselCardBody).toBe(1)
        }),
            it('open sweep shoud have who You Help', async ()=>{
            expect(await  openSweepstakeScreen.whoYouHelp).toBe(true)
        }),
            it('open sweep shoud have carousel Card Body', async ()=>{
            expect(await  openSweepstakeScreen.carouselCardBody).toBe(1)
        }),
            it('open sweep shoud have charity Details Legal', async ()=>{
            expect(await  openSweepstakeScreen.charityDetailsLegal).toBe(1)
        }),
            it('open sweep shoud have carousel Card Body', async ()=>{
            await openSweepstakeScreen.charityDetailsLegal.click()
            expect(await  openSweepstakeScreen.carouselCardBody).toBe(1)
        }),

            it('open sweep shoud have donationVariantsTitle', async ()=>{
            expect(await  openSweepstakeScreen.donationVariantsTitle).toBe(1)
        }),
            it('open sweep shoud have donation Variants', async ()=>{
            expect(await  openSweepstakeScreen.donationVariants).toBe(1)
        }),
            it('open sweep shoud have legal Header', async ()=>{
            expect(await  openSweepstakeScreen.legalHeader).toBe(1)
        }),
            it('open sweep shoud have legal Text', async ()=>{
            expect(await  openSweepstakeScreen.legalText).toBe(1)
        }),
            it('amount of donation variants is 5', async ()=>{
        expect(await openSweepstakeScreen.donationCardAmount).toBe(5)
    })
})

describe ('WINNER PENDING sweepstake screen validation', ()=> {
    it('winner pendidng screen needs to have sweep title', async () => {
        expect(await winnerPendingSweepstake.sweepstake_closed_title).toBe(1)
    }),
    it('winner pendidng screen needs to have WinnerPending text', async () => {
        expect(await winnerPendingSweepstake.WinnerPending).toBe(1)
    }),

    it('winner pendidng screen needs to have WinnerWillBeAnnounced text', async () => {
        expect(await winnerPendingSweepstake.WinnerWillBeAnnounced).toBe(1)
    })
    it('winner pendidng screen needs to have winnerPendingAnnounce Date ', async () => {
        expect(await winnerPendingSweepstake.winnerPendingAnnounceDate).toBe(1)
    }),
    it('winner pendidng screen needs to have winnerPendingAnnounce Date ', async () => {
        expect(await winnerPendingSweepstake.winnerPendingAnnounceDate).toBe(1)
    }),
    it('winner pendidng screen needs to have WinnerWillBeAnnounced text ', async () => {
        expect(await winnerPendingSweepstake.WinnerWillBeAnnounced).toBe(1)
    }),
    it('winner pendidng screen needs to have Experience Supported text ', async () => {
        expect(await winnerPendingSweepstake.ExperienceSupported).toBe(1)
    }),
    it('winner pendidng screen needs to have Experience sweepstakeClosedCharityTitle ', async () => {
        expect(await winnerPendingSweepstake.sweepstakeClosedCharityTitle).toBe(1)
    })
})

describe ('verify Winner Announced sweep has correct sections', ()=>{
    it('sweep title is present', async()=>{
        expect(await winnerAnnouncedSweepstake.sweepstakeClosedCharityTitle).toBe(1)
    }),
        it('sweep has Congrats', async()=>{
            expect(await winnerAnnouncedSweepstake.congrats).toBe(1)
        }),
        it('sweep winner announce date is present', async()=>{
            expect(await winnerAnnouncedSweepstake.winnerAnnounceDate).toBe(1)
        }),
        it('sweep winner name is present', async()=>{
            expect(await winnerAnnouncedSweepstake.winnerName).toBe(1)
        }),
        it('sweep winner location is present', async()=>{
            expect(await winnerAnnouncedSweepstake.winnerLocation).toBe(1)
        }),
        it('sweep prize details is present', async()=>{
            expect(await winnerAnnouncedSweepstake.prizeDetails).toBe(1)
        }),
        it('sweep rules section is present', async()=>{
            expect(await winnerAnnouncedSweepstake.rules).toBe(1)
        }),
        it('sweep title is present', async()=>{
            expect(await winnerAnnouncedSweepstake.sweepTitle).toBe(1)
        })
})

