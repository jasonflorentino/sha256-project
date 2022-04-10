module.exports = {
  bigIntToNumber,
  assert,
  matchResults,
};

function bigIntToNumber(b) {
  return Number(b.toString(10));
}

function assert(msg, pass, val) {
  if (!pass) 
    throw new Error(`Assertion Error: Expected "${msg}", got ${val}`);
}

function matchResults(results, expected) {
  let pass = true;

  for (let i = 0; i < expected.length; i++) {
    if (results[i] !== expected[i]) {
      console.log(`results[${i}] doesn't match!`);
      console.log(`expected: ${expected[i]}`);
      console.log(`     got: ${results[i]}`);
      pass = false;
    }
  }

  console.log(pass ? 'pass' : 'fail');
  return pass;
}
