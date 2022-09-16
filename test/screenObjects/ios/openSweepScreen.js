class OpenSweepScreen{
 get firstDonationVariant(){
    return $$('~donation_card-0')
 }
 get sweepstakeHeroImage(){
     return $$('~sweepstake_hero_image').length
 }

 get sweepstakeStatus(){
     return $$('~sweepstake_open').length
 }

 get sweepstakeDetails(){
     return $$('~sweepstake_details').length
 }

 get sweepstakeDetailsBodyCopyEphasis(){

 }


 get sweepstakePrizeDetails(){
     return $$('~prize_details').length
 }

 get sweepstakeCharityDetails(){
     return $$('~charity_details').length
 }

 get sweepstakeDonationVariants(){
     return $$('~donation_variants').length
 }

// from other file

    get detailsSupportElement() {
        const detailsSupport = $$('~sweepstake_details_support').length
       return detailsSupport
    }

    get detailsTitle(){
            const sweepTitle = $$('~sweepstake_details_title').length
            return sweepTitle
    }

   /*Accessabilty id should be unique. create ticket
   get detailsBodyText(){
        const detailsBodyText = $$('Win a 5-day vacation at The St. Regis...*)
        return bodyDetails

    */

    get detailsTitle(){
        const detailsTitle = $$('~sweepstake_details_legal').length
        return detailsTitle
    }
    get closesText(){
        const closeText = $$('~sweepstake_details_close_date_title').length
        return closeText
    }
    get winnerAnnouncedTitle(){
        const winnerAnnouncedTitle = $$('~sweepstake_details_close_date').length
        return winnerAnnouncedTitle
    }
    get winnerAnnounceDate(){
        const winnerAnnounceDate = $$('~sweepstake_details_winner_datee').length
        return winnerAnnounceDate
    }
    get prizeDetailsTitle(){
        const prizeDetailsTitle = $$('~prize_details_title').length
        return prizeDetailsTitle
    }
    get carouselCardSubtitle(){
        const carouselCardSubtitle = $$('~carousel_card_0_subtitle').length
        return carouselCardSubtitle
    }
    get carouselCardBody(){
        const carouselCardBody = $$('~carousel_card_0_body').length
        return carouselCardBody
    }

    get whoYouHelp(){
        const whoYouHelp = $$("~Who you'll help").length
        return whoYouHelp
    }

  /* accessabiliyu id should be changed
    get charityBody(){
        const charityBody = $$('~').length
        const charityBody1 = expect(charityBody).toBeDisabled()
        return charityBody1
    }

   */

   /* omaze logo
    charity logo all images need accessability id

    */

    get charityDetailsLegal(){
        const charityDetailsLegal = $$('~charity_details_legal').length
        return charityDetailsLegal
    }
    get donationVariantsTitle(){
        const donationVariantsTitle = $$('~donation_variants_title').length
        return donationVariantsTitle
    }
    get donationVariants(){
        const donationVariants = $$('~donation_variants_cards').length
        return donationVariants
    }

    get legalHeader(){
        const legalHeader = $$('~collapse_header')
        return legalHeader
    }

/*needs accessability id
    get legalText(){
        const legalText = $$().length
        const legalText1 = expect(legalText).toBeDisabled()
        return legalText1
        }

 */


    get donationCardAmount() {
        const donationCardsAmount = $$('[name= "donation_card_button"]').length
        return donationCardsAmount
    }


}

module.exports= new OpenSweepScreen()