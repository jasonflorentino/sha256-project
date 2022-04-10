const { rightRotate32 } = require("./rightRotate32");

function littleSigma1(x) {
  return (rightRotate32(x, 17) ^ rightRotate32(x, 19) ^ (x >>> 10)) >>> 0;
}

module.exports = {
  littleSigma1,
};
