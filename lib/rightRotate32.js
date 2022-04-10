const { assert } = require("../sha256.helpers");
const { add32 }  = require("./add32");

function rightRotate32(x, n) {
  assert("x is less than 2^32", x < 2 ** 32, x);
  let right = x >>> n;
  // javascript left shift works on signed 32 bit int.
  // using unsigned right shift will convert operand to uint32.
  let left = (x << (32 - n)) >>> 0;
  return add32(left, right);
}

module.exports = {
  rightRotate32,
};
