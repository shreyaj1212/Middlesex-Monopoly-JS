/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//
const Location = require('./location');

class Tax extends Location{
  constructor(name, tax_amt,position) {
    super(name, position);
    this.taxAmt = tax_amt;
  }

  /*
   * applies the tax to the player
   */
  applyTax(player) {
    player.updateWealth(-1*taxAmt);
  }

  isOwnable() {
    return false;
  }
}

module.exports = Tax;
