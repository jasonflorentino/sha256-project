const { rightRotate32 } = require("./rightRotate32");

function bigSigma1(x) {
  return (
    (rightRotate32(x, 6) ^ rightRotate32(x, 11) ^ rightRotate32(x, 25)) >>> 0
  );
}

module.exports = {
  bigSigma1,
};
