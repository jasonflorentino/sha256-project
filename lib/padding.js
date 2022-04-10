const { Buffer } = require('buffer');
const { bigIntToNumber } = require('../sha256.helpers');

// Returns a Buffer byte array
function padding(messageLength) {
  if (messageLength > Number.MAX_SAFE_INTEGER) {
    return paddingBigInt(messageLength);
  }

  let msgTailBytes = (messageLength + 8) % 64;
  let fillerBytes = 64 - msgTailBytes;
  let zeroBytes = fillerBytes - 1;

  let paddingBytes = Buffer.alloc(fillerBytes)
    .fill(128, 0, 1)
    .fill(0, 1, zeroBytes);

  let lengthBytes = Buffer.alloc(8);
  lengthBytes.writeBigUInt64BE(BigInt(messageLength * 8));

  return Buffer.concat([paddingBytes, lengthBytes]);
}

// Returns a Buffer byte array
function paddingBigInt(messageLength) {
  let msgTailBytes = (messageLength + 8n) % 64n;
  let fillerBytes = 64n - msgTailBytes;
  let zeroBytes = fillerBytes - 1n;

  let paddingBytes = Buffer.alloc(bigIntToNumber(fillerBytes))
    .fill(128, 0, 1)
    .fill(0, 1, bigIntToNumber(zeroBytes));

  let lengthBytes = Buffer.alloc(8);
  lengthBytes.writeBigUInt64BE(messageLength * 8n);

  return Buffer.concat([paddingBytes, lengthBytes]);
}

module.exports = {
  padding,
  paddingBigInt,
};
