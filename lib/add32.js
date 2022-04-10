function add32(x, y) {
  return (x + y) % 2 ** 32;
}

module.exports = {
  add32,
};
