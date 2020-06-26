/**
 * @author Shreya Jain
 */
const Constants = require('../shared/constants');
const Fortune = require('./Fortune');
const Location = require('./location');
const Player = require('./player');

class Chance extends Location{
  constructor(position) {
    super("Chance",position);
  }

  generateRandomFortune() {
    // var fortuneNum = Math.random()*this.NUM_CHANCE_FORTUNES;
    // console.log(this.fortuneList[parseInt(fortuneNum)]);
    // console.log("made it through generateRandomFortune");
    // return (this.fortuneList[fortuneNum]);
  }

  /*
   * STILL NEED TO IMPLEMENT HOW TO UPDATE THE WEALTH
   */
  executeFortune(player){
    // console.log(this.generateRandomFortune());
    var fortune = this.generateRandomFortune();
    // player.updateWealth(fortune.getWealthImpact());
    return fortune;
  }
}
module.exports = Chance;
