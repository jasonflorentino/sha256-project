const { sha256 } = require("./sha256");
const { matchResults } = require("./sha256.helpers");

const input = [
  "",
  "hello world",
  "aardvark zebra yak pig jaguar aardvark rhinoceros butte",
  "narwhal dog llama llama giraffe narwhal octopus dog xeno",
  "John Jacob Jingleheimer Schmidt! His name is my name too. Whenever we go out the people always shout there goes John Jacob Jingleheimer Schmidt! Nanananananana...",
];
const output = [
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
  "4b45e1bec21185865d1628a8a502eed789193a3c253a529983e4bc17fa65f32b",
  "99069f1eba4c874aba649c17136a253e1dd504cda936ab77cf189c2cf9eb88ff",
  "68b74d91364475247c10bfee2621eaa13bcabb033ed1dee58b74c05e7944489a",
];

let results = input.map((m) => sha256(m));
matchResults(results, output);
