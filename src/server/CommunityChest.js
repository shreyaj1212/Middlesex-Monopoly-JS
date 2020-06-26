/**
 * @author Shreya Jain
 */
 const Constants = require('../shared/constants');
 const Fortune = require('./Fortune');
 const Location = require('./location');
 const Player = require('./player');

class CommunityChest extends Location{
  constructor(position) {
    super("Community Chest", position);
    // this.fortune = null;
  }

   generateRandomFortune() {
     // var tempFortuneNum = Math.random()*Constants.NUM_FORTUNES;
     // return Constants.FORTUNES[tempFortuneNum];
   }

   /*
    * applies the fortune to the player
    */
   executeFortune(player){
     // var fortune = generateRandomFortune();
     // fortune.applyWealthImpact(player);
   }
 }
module.exports = CommunityChest;
