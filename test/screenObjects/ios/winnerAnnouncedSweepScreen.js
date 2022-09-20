class winnerAnnouncedSweepstake {

   /* get getCharityDetailsTitle(){
        const charityDetailsTitle = $('~sweepstake_closed_charity_title').getText()
        return charityDetailsTitle
    }

    get whoWasSupported(){
       const whoSawSupported =  $('~this experience supported').getText()
        return whoSawSupported
    }

    */

    get sweepTitle() {
        return $$('~sweepstake_closed_title').length
    }

    get prizeDetails() {
        return $$('[name="collapse_header').length
    }

    get congrats() {
        return $$('~Congrats!e').length
    }

    get winnerName() {
        return $$('~winner_name').length
    }

    get winnerLocation() {
        return $$('~winner_location').length
    }

    get winnerAnnounceDate() {
        return $$('~winner_announce_date').length
    }

    get thisExperienceSupported() {
        return $$('~this experience supported').length
    }
    get sweepstakeClosedCharityTitle() {
        return $$('~sweepstake_closed_charity_title').length
    }

    get rules(){
        return $$('[label="Sweepstake Rules & Eligibility"]').length
    }

}

module.exports = new winnerAnnouncedSweepstake()