/**
 * @author Shreya Jain
 */

const Player = require('./player');

class Fortune {
   constructor(string,wealthImpact) {
   this.string=string;
   this.wealthImpact = wealthImpact;
 }

   getString() {
     return this.string;
   }

   toString() {
     return this.string;
   }

   applyWealthImpact(person) {
     person.updateWealth(wealthImpact);
   }

   getWealthImpact() {
     return this.wealthImpact;
   }
 }

module.exports = Fortune;
