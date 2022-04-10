const { add32 }        = require("./add32");
const { littleSigma0 } = require("./littleSigma0");
const { littleSigma1 } = require("./littleSigma1");

// Takes a Buffer byte array
function messageSchedule(block) {
  let M = new Array(16).fill(0);
  for (let i = 0; i < 16; i++) {
    let start = 4 * i;
    M[i] = block.readUInt32BE(start);
  }

  let W = new Array(64).fill(0);
  for (let i = 0; i < 64; i++) {
    if (i < 16) { W[i] = M[i]; } 
    else {
      W[i] = 
        add32(
          add32(
            add32(
              W[i - 16], 
              littleSigma0(W[i - 15])
            ), 
            W[i - 7]
          ),
          littleSigma1(W[i - 2])
        );
    }
  }

  return W;
}

module.exports = {
  messageSchedule,
};
