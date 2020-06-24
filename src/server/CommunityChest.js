/**
 * @author Shreya Jain
 */
 const Constants = require('../shared/constants');
 const Fortune = require('./Fortune');
 const Location = require('./location');
 
class CommunityChest extends Location{
  constructor(position) {
    super("Community Chest", position);
    var f1 = new Fortune( "Ay Caramba! You missed assembly. Lose $50",-50);
    var f2 = new Fortune( "Oh no! You accidentally slept in! Lose $50",-50);
    var f3 = new Fortune( "You gave a great tour today! Gain $50",50);
    var f4 = new Fortune( "You went to Open Table and served your community! Gain $50",50);
    this.fortuneList = [f1,f2,f3,f4];
  }

   generateRandomFortune() {
     var fortuneNum = Math.random()*NUM_CHANCE_FORTUNES;
     return fortuneList[fortuneNum];
   }

   /*
    * applies the fortune to the player
    */
   executeFortune(player){
     var fortune = generateRandomFortune();
     fortune.applyWealthImpact(player);
   }
 }
module.exports = CommunityChest;
