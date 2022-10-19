// https://www.acmicpc.net/problem/2164

const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString();

// 1부터 N 까지 배열만들기 Array.from({length:N}, (v,i) => i+1);
let lis = Array.from({ length: `${input}` }, (v, i) => i + 1);

function sol(n) {
  if (n <= 3) {
    return lis[1] || lis[0]; // 1일때 에러 제거
  }
  const last_one = lis[lis.length - 1];
  // 인덱스가 홀수인 애만 남기기
  lis = lis.filter((v, i) => i % 2 !== 0);

  if (n % 2 !== 0) {
    // 길이가 odd 였을 경우 마지막 요소를 처음으로 보내기
    lis.unshift(last_one);
  }
  // 재귀
  return sol(lis.length);
}
console.log(sol(input));
