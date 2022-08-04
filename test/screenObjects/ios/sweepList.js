class sweepstakeListScreen {
    get openSweep(){
        return $("//*[@name= 'Bees']")
    }

}
module.exports = new sweepstakeListScreen()