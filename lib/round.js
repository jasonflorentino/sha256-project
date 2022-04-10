const { add32 } = require("./add32");
const { choice } = require("./choice");
const { majority } = require("./majority");
const { bigSigma0 } = require("./bigSigma0");
const { bigSigma1 } = require("./bigSigma1");

function round(state, roundConstant, scheduleWord) {
  let [a, b, c, d, e, f, g, h] = state;

  maj   = majority(a, b, c);
  ch    = choice(e, f, g);
  temp1 = add32(add32(add32(add32(h, bigSigma1(e)), ch), roundConstant), scheduleWord);
  temp2 = add32(bigSigma0(a), maj);

  let newState = [
    add32(temp1, temp2), 
    a, 
    b, 
    c, 
    add32(d, temp1), 
    e, 
    f, 
    g
  ];

  return newState;
}

module.exports = {
  round,
};
