//www.acmicpc.net/problem/10951

https: var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.forEach(function (el, index, array) {
  input[index] = el.split(" ");
});

var sum = 0,
  cnt = 0;
input.forEach(function (el, index) {
  el.forEach(function (el, index) {
    sum += parseInt(el, 10);
    cnt += index;
  });

  if (cnt > 0) {
    console.log(sum);
  }

  sum = 0;
  cnt = 0;
});
