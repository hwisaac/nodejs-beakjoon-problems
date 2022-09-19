const fs = require("fs");

// fs 는 입력속도는 빠르나, 간혹 접근 문제(런타임) 발생함
// /dev/stdin 대신 그냥 0만 넣어도 되는듯
// 띄어쓰기로 입력
let input = fs.readFileSync("/dev/stdin").toString();

// 줄바꿈으로 입력 구분
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// readline 모듈로 입력

//숫자로 전환. 위에서 그냥 .map(Number); 해도 됨
input = input.map(Number);

let input = fs.readFileSync("/dev/stdin").toString();

//parseInt(parseFloat) vs Number
// parse는 '9원' 뒤에 문자도 섞였을 경우
// Number 는 정수/실수 둘다 사용가능
