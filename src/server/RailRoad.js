/**
 * @author Shreya Jain
 */
const Constants = require('../shared/constants');

class RailRoad extends Ownable{
  constructor(name,position,rent) {
    this.name = name;
    this.position = position;
    this.rent = rent;
    this.price = Constants.RAILROAD_PRICE;
  }

  getRent(diceRoll){
    return rent;
  }

  setRent(x) {
    this.rent =x;
  }
}
