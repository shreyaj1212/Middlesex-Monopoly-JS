const Constants = require('../shared/constants');

class Chance extends Location{
  constructor(position) {
    this.position = position;
    var f1 = {string: "Oh no! Everyone in your dorm got sick, so now you are too! Lose $50",wealthImpact:-50};
    var f2 = {string: "Oh no! It snowed but Mr. Beare didn't call a snow day! Lose $50",wealthImpact:-50};
    var f3 = {string: "It snowed and Mr. Beare called a snow day! Gain $50",wealthImpact:50};
    var f3 = {string: "It's sunny and you play spikeball on the Circle! Gain $50",wealthImpact:50};
    this.fortuneList = [f1,f2,f3,f4];
  }

  generateRandomFortune() {
    var fortuneNum = Math.random()*NUM_CHANCE_FORTUNES;
    return fortuneList[fortuneNum];
  }

  executeFortune(player){
    var fortune = generateRandomFortune();
    fortune.applyWealthImpact(player);
  }
}
