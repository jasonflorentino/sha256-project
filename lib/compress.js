const { ROUND_CONSTANTS } = require("../sha256.constants");
const { messageSchedule } = require('./messageSchedule');
const { round } = require('./round');
const { add32 } = require('./add32');

function compress(inputState, block) {
  let W = messageSchedule(block);
  let state = inputState;

  for (let i = 0; i < 64; i++) {
    state = round(state, ROUND_CONSTANTS[i], W[i]);
  }

  return [
    add32(inputState[0], state[0]),
    add32(inputState[1], state[1]),
    add32(inputState[2], state[2]),
    add32(inputState[3], state[3]),
    add32(inputState[4], state[4]),
    add32(inputState[5], state[5]),
    add32(inputState[6], state[6]),
    add32(inputState[7], state[7]),
  ];
}

module.exports = {
  compress,
};
