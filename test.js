let fs = require("fs");
const { stringify } = require("querystring");
let input = fs.readFileSync("input.txt").toString().split("\n");

let N = input[0]; // string

function sumString(N) {
  let sum = 0;

  for (let i = 0; i < N.length; i++) {
    sum += Number(N[i]);
  }
  return String(sum);
}

function next(N) {
  let sumStr;

  if (Number(N) < 10) {
    sumStr = sumString(N + "0");
  } else {
    sumStr = sumString(N);
  }

  let res = N[N.length - 1] + sumStr[sumStr.length - 1];

  return String(parseInt(res));
}

let nxtN = next(N);
let cnt = 1;

while (nxtN !== N) {
  cnt += 1;
  nxtN = next(nxtN);
}

console.log(cnt);
