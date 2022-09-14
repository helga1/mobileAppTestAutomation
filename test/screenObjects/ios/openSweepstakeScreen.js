class openSweepstakeScreen {
    get detailsSupportElement(){
        const detailsSupport = $$('~sweepstake_details_support').length

       const detailsSupportshouldBeDisplayed = expect(detailsSupport).toBeDisabled()
        return detailsSupportshouldBeDisplayed
    }

    get detailsTitle(){
            const sweepTitle = $$('~sweepstake_details_title').length
            const title = expect(detailsSupport).toBeDisabled()
            return title
    }
   /*
   Accessabilty id should be unique. create ticket
   get detailsBodyText(){
        const detailsBodyText = $$('Win a 5-day vacation at The St. Regis...*)
        return bodyDetails
    }
    */
    get detailsTitle(){
        const detailsTitle = $$('~sweepstake_details_legal').length
        const detailsTitle1 = expect(detailsTitle).toBeDisabled()
        return detailsTitle1
    }
    get closesText(){
        const closeText = $$('~sweepstake_details_close_date_title').length
        const closeText1 = expect(closesText).toBeDisabled()
        return closeText1
    }
    get winnerAnnouncedTitle(){
        const winnerAnnouncedTitle = $$('~sweepstake_details_close_date').length
        const winnerAnnouncedTitle1 = expect(winnerAnnouncedTitle).toBeDisabled()
        return winnerAnnouncedTitle1
    }
    get winnerAnnounceDate(){
        const winnerAnnounceDate = $$('~sweepstake_details_winner_datee').length
        const winnerAnnounceDate1 = expect(winnerAnnounceDate).toBeDisabled()
        return winnerAnnounceDate
    }
    get prizeDetailsTitle(){
        const prizeDetailsTitle = $$('~prize_details_title').length
        const prizeDetailsTitle1 = expect(prizeDetailsTitle).toBeDisabled()
        return prizeDetailsTitle1
    }
    get carouselCardSubtitle(){
        const carouselCardSubtitle = $$('~carousel_card_0_subtitle').length
        const carouselCardSubtitle1 = expect(carouselCardSubtitle).toBeDisabled()
        return carouselCardSubtitle1
    }
    get carouselCardBody(){
        const carouselCardBody = $$('~carousel_card_0_body').length
        const carouselCardBody1 = expect(carouselCardBody).toBeDisabled()
        return carouselCardBody1
    }

    get whoYouHelp(){
        const whoYouHelp = $$("~Who you'll help").length
        const whoYouHelp1 = expect(whoYouHelp).toBeDisabled()
        return whoYouHelp1
    }
   /*
   accessabiliyu id should be changed
    get charityBody(){
        const charityBody = $$('~').length
        const charityBody1 = expect(charityBody).toBeDisabled()
        return charityBody1
    }
    */
    /*
    omaze logo
    charity logo all images need accessability id
     */

    get charityDetailsLegal(){
        const charityDetailsLegal = $$('~charity_details_legal').length
        const charityDetailsLegal1 = expect(charityDetailsLegal).toBeDisabled()
        return charityDetailsLegal1
    }
    get donationVariantsTitle(){
        const donationVariantsTitle = $$('~donation_variants_title').length
        const donationVariantsTitle1 = expect(donationVariantsTitle).toBeDisabled()
        return donationVariantsTitle1
    }
    get donationVariants(){
        const donationVariants = $$('~donation_variants_cards').length
        const donationVariants1 = expect(donationVariants).toBeDisabled()
        return donationVariants1
    }

    get legalHeader(){
        const legalHeader = $$('~collapse_header')
        return legalHeader
    }
/*
needs accessability id
    get legalText(){
        const legalText = $$().length
        const legalText1 = expect(legalText).toBeDisabled()
        return legalText1}
    */

    get donationCardAmount() {
        const donationCardsAmount = $$('[name= "donation_card_button"]').length
        return donationCardsAmount
    }

}
module.exports = new openSweepstakeScreen()