const { round } = require("./round");
const { matchResults } = require("../sha256.helpers");

const input = {
  state: [
    2739944672, 3126690193, 4191866847, 1163785745, 
    3714074692, 1172792371, 283469062,  826169706,
  ],
  roundConstant: 961987163,
  scheduleWord: 3221900128,
};

const output = [
  1724514418, 2739944672, 3126690193, 4191866847, 
  1638715774, 3714074692, 1172792371, 283469062,
];

const result = round(input.state, input.roundConstant, input.scheduleWord);
matchResults(result, output);
