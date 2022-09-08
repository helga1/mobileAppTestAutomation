class winnerAnnouncedSweepstake {

    get getCharityDetailsTitle(){
        const charityDetailsTitle = $('~sweepstake_closed_charity_title').getText()
        return charityDetailsTitle
    }

    get whoWasSupported(){
       const whoSawSupported =  $('~this experience supported').getText()
        return whoSawSupported
    }

}

module.exports = new winnerAnnouncedSweepstake()