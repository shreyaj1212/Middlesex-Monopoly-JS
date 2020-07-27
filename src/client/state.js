// import { updateLeaderboard } from 'leaderboard';

// The "current" state will always be RENDER_DELAY ms behind server time.
// This makes gameplay smoother and lag less noticeable.
const RENDER_DELAY = 100;

const gameUpdates = [];
let gameStart = 0;
let firstServerTimestamp = 0;

let lastGameUpdate = null;

// Handle a newly received game update.
export function processGameUpdate(update) {
  lastGameUpdate = update;
}

export function getCurrentState() {
  return lastGameUpdate;
}