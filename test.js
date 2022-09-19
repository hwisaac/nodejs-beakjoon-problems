let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
const N = Number(input[0]);

let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log(sum);
