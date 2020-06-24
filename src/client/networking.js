import io from 'socket.io-client';
import { throttle } from 'throttle-debounce';
import { processGameUpdate } from 'state';

const Constants = require('../shared/constants');
const socketProtocol = (window.location.protocol.includes('https')) ? 'wss' : 'ws';
const socket = io(`${socketProtocol}://${window.location.host}`, { reconnection: false });
const connectedPromise = new Promise(resolve => {
  socket.on('connect', () => {
    console.log('Connected to server!');
    resolve();
  });
});

export const play = username => {
  socket.emit(Constants.MSG_TYPES.JOIN_GAME, username);
};

export const roll_dice = username => {
  socket.emit(Constants.MSG_TYPES.ROLL_DICE_INPUT, username);
};

export const buy_property = username => {
  socket.emit(Constants.MSG_TYPES.BUY_PROPERTY_INPUT, username);
};

export const connect = onGameOver => (
  connectedPromise.then(() => {
    // Register callbacks
    socket.on(Constants.MSG_TYPES.GAME_UPDATE, processGameUpdate);
    socket.on(Constants.MSG_TYPES.GAME_OVER, onGameOver);
    socket.on('disconnect', () => {
      console.log('Disconnected from server.');
      document.getElementById('disconnect-modal').classList.remove('hidden');
      document.getElementById('reconnect-button').onclick = () => {
        window.location.reload();
      };
    });
  })
);
