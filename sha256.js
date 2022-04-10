const { Buffer } = require("buffer");
const { INITIALIZATION_VECTOR } = require("./sha256.constants");
const { padding } = require("./lib/padding");
const { compress } = require("./lib/compress");

/**
 * This implementation of SHA-256 is for learning!
 * Don't use this for actual cryptography!
 */
function sha256(message) {
  // Create an array of bytes from the input message.
  let buffer = Buffer.from(message);
  // Pad the message to fit blocks of 64 bytes.
  let paddedMessage = Buffer.concat([buffer, padding(buffer.length)]);
  // Initialze state - this will be used as input for hashing with the first
  // block, with each resulting state used as input with the next block.
  let state = [...INITIALIZATION_VECTOR];

  // Successively hash state with each message block.
  for (let i = 0; i < paddedMessage.length / 64; i++) {
    let block = paddedMessage.subarray(i * 64, (i + 1) * 64);
    state = compress(state, block);
  }

  // Produce hex string from the final state.
  // Because the final state in the chain is returned as the
  // hash, it can be exploited with a length extension attack.
  let hash = "";
  for (let x of state) {
    hash += x.toString(16).padStart(8, "0");
  }
  return hash;
}

module.exports = {
  sha256,
};

// Run using:
// node sha256.js "your message in quotes"
if (require.main === module) {
  console.log(sha256(process.argv[2] || ''));
}
