/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//
const Constants = require('./constants');

const Player = require('./player');
const Location = require('./location');
class RailRoad {//extends Ownable{
  //onstructor(nom,price,color,owner,rents,pos
  constructor(name,position) {
    this.name = name;
    this.position = position;
    this.rent = 25;
    this.price = 200;
  }

  getRent(diceRoll){
    return this.rent;
  }

  setRent(x) {
    this.rent =x;
  }
}

module.exports = RailRoad;
