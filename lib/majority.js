function majority(x, y, z) {
  return ((x & y) ^ (x & z) ^ (y & z)) >>> 0;
}

module.exports = {
  majority,
};
