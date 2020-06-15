import io from 'socket.io-client';
import { throttle } from 'throttle-debounce';
import { processGameUpdate } from './state';

const Constants = require('../shared/constants');

export const play = username => {
  socket.emit(Constants.MSG_TYPES.JOIN_GAME, username);
};
