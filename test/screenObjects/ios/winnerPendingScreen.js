class winnerPendingScreen {
    get sweepstake_closed_title(){
        return $$('~sweepstake_closed_title').length
    }
    /*get prizeDetails Require accessability id
     */

    get WinnerPending() {
        return $$('~Winner pending!').length
    }

    get WinnerWillBeAnnounced(){
        return $$('~Winner will be announced on or around').length
    }

    get winnerPendingAnnounceDate(){
        return $$('~winner_pending_announce_date').length
    }
    get ExperienceSupported(){
        return $$('~this experience supported').length
    }
    get sweepstakeClosedCharityTitle(){
        return $$('~sweepstake_closed_charity_title').length
    }
    /* charity logo needs acc. id + sweep rules */






}
module.exports = new winnerPendingScreen()