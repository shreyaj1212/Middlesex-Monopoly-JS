/**
 * @author Shreya Jain
 */

const Color = require('./MonopolyColor');
const Player = require('./player');

class Fortune {
   constructor(string,wealthImpact) {
     this.string=string;
     this.wealthImpact = wealthImpact;
   }

   toString() {
     return this.string;
   }

   applyWealthImpact(player) {
     player.updateWealth(wealthImpact);
   }

   getWealthImpact() {
     return this.wealthImpact;
   }
 }

var poo = new Fortune("Ay Caramba! You have to wait in line for the stirfry machine!",-50);
console.log(poo);
console.log(poo.getWealthImpact());
console.log(module.exports = Fortune);
// console.log(new Color("Purple"));
