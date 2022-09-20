let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 길이를 하나 줄여야함 (이유는 모름)
for (let i = 0; i < input.length - 1; i++) {
  let a = input[i].split(" ")[0];
  let b = input[i].split(" ")[1];

  console.log(Number(a) + Number(b));
}
