const Constants = require('../shared/constants');

class Tax extends Location{
  constructor(name, tax_amt) {
    this.name = name;
    this.taxAmt = tax_amt;
  }

  /*
   * applies the tax to the player
   */
  applyTax(player) {
    player.updateWealth(-1*taxAmt);
  }
}
