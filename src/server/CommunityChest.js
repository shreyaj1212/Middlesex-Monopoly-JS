/**
 * @author Shreya Jain
 */

 const Fortune = require('./Fortune');
 const Player = require('./player');

 class CommunityChest extends Location{
   constructor(position) {
     super("Community Chest", position);
     var f1 = {string: "Ay Caramba! You missed assembly. Lose $50",wealthImpact:-50};
     var f2 = {string: "Oh no! You accidentally slept in! Lose $50",wealthImpact:-50};
     var f3 = {string: "You gave a great tour today! Gain $50",wealthImpact:50};
     var f4 = {string: "You went to Open Table and served your community! Gain $50",wealthImpact:50};
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
