const Chance = require('./Chance');
const Player = require('./player');

var chance1 = new Chance();
var p1 = new Player("Shreya");
console.log(chance1.generateRandomFortune());
// console.log(chance1.executeFortune(p1));
// console.log(p1);
