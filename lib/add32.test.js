const { add32 } = require("./add32");

console.log(add32(1, 2) === 3);
console.log(add32(4294967295, 1) === 0);
console.log(add32(3050487260, 3710144918) === 2465664882);
