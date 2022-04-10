function choice(x, y, z) {
  return ((x & y) ^ (~x & z)) >>> 0;
}

module.exports = {
  choice,
};
