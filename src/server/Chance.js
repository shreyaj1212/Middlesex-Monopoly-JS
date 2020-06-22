/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//

const Fortune = require('./Fortune');

class Chance extends Location{
  constructor(position) {
    super("Chance",position);
    var f1 = new Fortune( "Oh no! Everyone in your dorm got sick, so now you are too! Lose $50",-50);
    var f2 = new Fortune("Oh no! It snowed but Mr. Beare didn't call a snow day! Lose $50",-50);
    var f3 = new Fortune("It snowed and Mr. Beare called a snow day! Gain $50",50);
    var f4 = new Fortune("It's sunny and you play spikeball on the Circle! Gain $50",50);
    this.fortuneList = [f1,f2,f3,f4];
    this.NUM_CHANCE_FORTUNES = 4;
  }

  generateRandomFortune() {
    var fortuneNum = Math.random()*this.NUM_CHANCE_FORTUNES;
    console.log(this.fortuneList[0]);
    return (this.fortuneList[fortuneNum]);
  }

  /*
   * STILL NEED TO IMPLEMENT HOW TO UPDATE THE WEALTH
   */
  executeFortune(player){
    var fortune = this.generateRandomFortune();
    // player.updateWealth(fortune.wealthImpact);
    return fortune;
  }
}
module.exports = Chance;
