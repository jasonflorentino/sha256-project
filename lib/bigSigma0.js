const { rightRotate32 } = require("./rightRotate32");

function bigSigma0(x) {
  return (
    (rightRotate32(x, 2) ^ rightRotate32(x, 13) ^ rightRotate32(x, 22)) >>> 0
  );
}

module.exports = {
  bigSigma0,
};
