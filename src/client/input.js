// import { play } from './networking';
//
// /*
//  * I think Monopoly only needs click inputs...I might be wrong we'll see
//  */
export function startCapturingInput() {
  window.addEventListener('click', onMouseInput);
}

export function stopCapturingInput() {
  window.removeEventListener('click', onMouseInput);
}
//
// /*
//  * This method has to handle a click, which depends on which button is clicked
//  * so the HTML id of the button clicked can be a parameter for this method?
//  */
// function handleInput(htmlID) {
//   if(htmlID.equals("play-button")) {
//     takeTurn();
//   }
//   else if(htmlID.equals("buy")) {
//
//   }
// }

import { roll_dice,buy_property } from './networking';

// function onMouseInput(e) {
//   handleInput(e.clientX, e.clientY);
// }

// function onTouchInput(e) {
//   const touch = e.touches[0];
//   handleInput(touch.clientX, touch.clientY);
// }

function handleInput() {
  roll_dice();
  buy_property();
}

// export function startCapturingInput() {
//   window.addEventListener('mousemove', onMouseInput);
//   window.addEventListener('click', onMouseInput);
//   window.addEventListener('touchstart', onTouchInput);
//   window.addEventListener('touchmove', onTouchInput);
// }
//
// export function stopCapturingInput() {
//   window.removeEventListener('mousemove', onMouseInput);
//   window.removeEventListener('click', onMouseInput);
//   window.removeEventListener('touchstart', onTouchInput);
//   window.removeEventListener('touchmove', onTouchInput);
// }
