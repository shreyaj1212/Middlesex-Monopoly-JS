const Game = require('./game');
const Player = require('./player');

var game = new Game();
var player1 = new Player("Spongebob");
var player2 = new Player("Squidward");
var player3 = new Player("Patrick");
var player4 = new Player("Sandy");

game.addPlayer(player1);
game.addPlayer(player2);
game.addPlayer(player3);
game.addPlayer(player4);

console.log(game.getBoard());
console.log(game.sockets);
