const { rightRotate32 } = require("./rightRotate32");

console.log(rightRotate32(2, 1) === 1);
console.log(rightRotate32(1, 1) === 2147483648);
console.log(rightRotate32(2919882184, 31) === 1544797073);
