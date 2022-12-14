const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

N = Number(input[0]);
A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => {
    return a > b ? 1 : a == b ? 0 : -1;
  });
M = Number(input[2]);
B = input[3].split(' ').map(Number);

const isInArray = (x, l, r) => {
  const mid = parseInt((r + l) / 2);

  if (A[mid] === x) {
    return 1;
  } else if (r === mid) {
    return 0;
  }

  if (A[mid] < x) {
    return isInArray(x, mid + 1, r);
  } else {
    return isInArray(x, l, mid);
  }
};

ans = '';

B.forEach((element) => {
  ans += `${isInArray(element, 0, A.length)}\n`;
});
console.log(ans);
