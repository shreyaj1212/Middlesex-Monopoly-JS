const Constants = require('../shared/constants');

class RailRoad extends Ownable{
  constructor(name,position,rent) {
    this.name = name;
    this.position = position;
    this.rent = rent;
    this.price = Constants.RAILROAD_PRICE;
  }

  setRent(x) {
    this.rent =x;
  }
}
