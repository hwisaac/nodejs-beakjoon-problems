let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
const N = Number(input[0]);
let ans = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j < N - i - 1) {
      ans += " ";
    } else {
      ans += "*";
    }
  }

  ans += "\n";
}
//뒤쪽만 공백 제거
console.log(ans.trimEnd());
