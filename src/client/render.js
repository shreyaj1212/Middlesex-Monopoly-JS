// Modified by Shreya Jain
// import { debounce } from 'throttle-debounce';
// import { getAsset } from './assets';
import { getCurrentState } from './state';

const Constants = require('../shared/constants');

function updateHTML() {
    const { me, others } = getCurrentState();
    if(!me) {
        return;
    }

    const user_color = me.color;
    const username = me.username;
    const myPos = me.position;
    const myPosID = "box-" + myPos;

    const myPosBox = document.getElementById(myPosID);

    myPosBox.insertAdjacentHTML('beforeend','<p class=\"circle-sj\" style=\"background-color: #' + user_color +';\">'+ username +'</p>');
}
// const { PLAYER_RADIUS, PLAYER_MAX_HP, BULLET_RADIUS, MAP_SIZE } = Constants;

// Get the canvas graphics context
// document is the HTML document
// const canvas = document.getElementById('Board');
// const context = canvas.getContext('2d');
// setCanvasDimensions();

// function setCanvasDimensions() {
//   // On small screens (e.g. phones), we want to "zoom out" so players can still see at least
//   // 800 in-game units of width.
//   const scaleRatio = Math.max(1, 800 / window.innerWidth);
//   canvas.width = scaleRatio * window.innerWidth;
//   canvas.height = scaleRatio * window.innerHeight;
// }

// window.addEventListener('resize', debounce(40, setCanvasDimensions));

// function render() {
//   const { me, others, bullets } = getCurrentState();
//   if (!me) {
//     return;
//   }

//   // Draw background
//   renderBackground(me.x, me.y);

//   // Draw boundaries
//   context.strokeStyle = 'black';
//   context.lineWidth = 1;
//   context.strokeRect(canvas.width / 2 - me.x, canvas.height / 2 - me.y, MAP_SIZE, MAP_SIZE);

//   // Draw all players
//   renderPlayer(me, me);
//   others.forEach(renderPlayer.bind(null, me));
// }

// function renderBackground(x, y) {
//   const backgroundX = MAP_SIZE / 2 - x + canvas.width / 2;
//   const backgroundY = MAP_SIZE / 2 - y + canvas.height / 2;
//   const backgroundGradient = context.createRadialGradient(
//     backgroundX,
//     backgroundY,
//     MAP_SIZE / 10,
//     backgroundX,
//     backgroundY,
//     MAP_SIZE / 2,
//   );
//   backgroundGradient.addColorStop(0, 'black');
//   backgroundGradient.addColorStop(1, 'gray');
//   context.fillStyle = backgroundGradient;
//   context.fillRect(0, 0, canvas.width, canvas.height);
// }

// Renders a ship at the given coordinates
// function renderPlayer(me, player) {
//   const { positionOnBoard, photoFileName } = player;
//   // THE FOLLOWING TWO CONSTANTS MUST STILL BE CHANGED
//   const canvasX = canvas.width / 2 + x - me.x;
//   const canvasY = canvas.height / 2 + y - me.y;

//   if(positionOnBoard<=0 && positionOnBoard<10) {

//   }
//   // Draw player
//   context.save();
//   context.translate(canvasX, canvasY);
//   context.drawImage(
//     getAsset('hat.svg'), // using default filename for now
//     -PLAYER_RADIUS,
//     -PLAYER_RADIUS,
//     PLAYER_RADIUS * 2,
//     PLAYER_RADIUS * 2,
//   );
//   context.restore();
// }

// function renderMainMenu() {
//   const t = Date.now() / 7500;
//   const x = MAP_SIZE / 2 + 800 * Math.cos(t);
//   const y = MAP_SIZE / 2 + 800 * Math.sin(t);
//   renderBackground(x, y);
// }

// let renderInterval = setInterval(renderMainMenu, 1000 / 60);

// // Replaces main menu rendering with game rendering.
// export function startRendering() {
//   clearInterval(renderInterval);
//   renderInterval = setInterval(render, 1000 / 60);
// }

// // Replaces game rendering with main menu rendering.
// export function stopRendering() {
//   clearInterval(renderInterval);
//   renderInterval = setInterval(renderMainMenu, 1000 / 60);
// }
