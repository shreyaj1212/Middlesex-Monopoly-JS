import { play } from './networking';

/*
 * I think Monopoly only needs click inputs...I might be wrong we'll see
 */
export function startCapturingInput() {
  window.addEventListener('click', onMouseInput);
}

export function stopCapturingInput() {
  window.removeEventListener('click', onMouseInput);
}

/*
 * This method has to handle a click, which depends on which button is clicked
 * so the HTML id of the button clicked can be a parameter for this method?
 */
function handleInput(htmlID) {
  if(htmlID.equals("play-button")) {
    takeTurn();
  }
  else if(htmlID.equals("buy")) {

  }
}
