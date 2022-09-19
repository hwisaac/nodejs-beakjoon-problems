const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

input = input.map(Number);
let ans_string = "";
for (let i = 0; i < input.length; i++) {
  input[i] = correction[i] - input[i];
  ans_string += `${input[i]} `;
}

console.log(ans_string);
