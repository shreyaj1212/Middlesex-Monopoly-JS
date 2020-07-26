// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#3-client-entrypoints
import { connect, play, roll_dice } from './networking';
// import { startRendering, stopRendering } from './render';
// import { startCapturingInput, stopCapturingInput } from './input';
// import { downloadAssets } from './assets';
// import { initState } from './state';
// import { setLeaderboardHidden } from './leaderboard';

// I'm using Bootstrap here for convenience, but I wouldn't recommend actually doing this for a real
// site. It's heavy and will slow down your site - either only use a subset of Bootstrap, or just
// write your own CSS.
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/main.css';

// ***************************************************************************************

// import { connect, play } from './networking';
// import { startRendering, stopRendering } from './render';
// import { startCapturingInput, stopCapturingInput } from './input';
// import { downloadAssets } from './assets';
// import { initState } from './state';
// import { setLeaderboardHidden } from './leaderboard';

// I'm using a tiny subset of Bootstrap here for convenience - there's some wasted CSS,
// but not much. In general, you should be careful using Bootstrap because it makes it
// easy to unnecessarily bloat your site.
import './css/Monopoly.css';

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');
const colorInput = document.getElementById('color-input');
const startGameButton = document.getElementById('start-game-button');

Promise.all([
  connect(),
  // downloadAssets(),
]).then(() => {
  console.log("************promises done");
  playMenu.classList.remove('hidden');
  usernameInput.focus();
  colorInput.focus();
  playButton.onclick = () => {
    // Play!
    play(usernameInput.value,colorInput.value);
    playMenu.classList.add('hidden');
    // initState();
    // startCapturingInput();
    // startRendering();
    // setLeaderboardHidden(false);
  };
}).catch(console.error);

function onGameOver() {
  // stopCapturingInput();
  // stopRendering();
  playMenu.classList.remove('hidden');
  // setLeaderboardHidden(true);
}


// ***************************************************************************************
// const playMenu = document.getElementById('play-menu');
// const playButton = document.getElementById('play-button');
// const usernameInput = document.getElementById('username-input');

// Promise.all([
//   connect(onGameOver),
//   // downloadAssets(),
// ]).then(() => {
//   playMenu.classList.remove('hidden');
//   usernameInput.focus();
//   playButton.onclick = () => {
//     // Play!
//     play(usernameInput.value);
//     playMenu.classList.add('hidden');
//     initState();
//     // startCapturingInput();
//     // startRendering();
//     // setLeaderboardHidden(false);
//   };
// }).catch(console.error);

// function onGameOver() {
//   playMenu.classList.remove('hidden');
//   setLeaderboardHidden(true);
// }
