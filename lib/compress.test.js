const { Buffer } = require('buffer');
const { compress } = require("./compress");
const { matchResults } = require('../sha256.helpers');

const input = {
  state: [
    2918946378, 1679978889, 1678006433, 650957219, 
    379281712, 2112907926, 1775216060, 2152648190,
  ],
  block: "manatee fox unicorn octopus dog fox fox llama vulture jaguar xen",
};
const output = [
  1251501988, 1663226031, 2877128394, 4050467288, 2375501075, 1434687977,
  2625842981, 650253644,
];

let result = compress(input.state, Buffer.from(input.block));
matchResults(result, output);
