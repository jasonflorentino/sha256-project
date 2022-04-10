const { rightRotate32 } = require("./rightRotate32");

function littleSigma0(x) {
  return (rightRotate32(x, 7) ^ rightRotate32(x, 18) ^ (x >>> 3)) >>> 0;
}

module.exports = {
  littleSigma0,
};
