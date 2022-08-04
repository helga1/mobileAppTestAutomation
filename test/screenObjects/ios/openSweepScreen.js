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


 get sweepstakePrizeDetails(){
     return $$('~prize_details').length
 }

 get sweepstakeCharityDetails(){
     return $$('~charity_details').length
 }

 get sweepstakeDonationVariants(){
     return $$('~donation_variants').length
 }

 get


}

module.exports= new OpenSweepScreen()