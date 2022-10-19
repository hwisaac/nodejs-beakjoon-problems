const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split('\n');

N = Number(input[0]);
const x = input.slice(1);
const lis = [];

ans = ""

const calc = (el, list) =>{
  let x = el[1];
  switch (el[0]){
    case 'push':
      list.push(x);
      break;
    case 'pop':
      if (0 === list.length ){ 
      ans += "-1\n"
      }else{
        ans += `${list.shift(x)}\n`
      }
      break;
    case 'size':
      ans+= `${list.length}\n`
      break;
    case 'empty':
      if (list.length === 0){
        ans += "1\n"
      }else{
        ans += "0\n"
      }
      break;
    case 'front':
      if (list.length === 0){
        ans += "-1\n"
      }else{
        ans += `${list[0]}`
      }
      break;
    case 'back':
      if (list.length === 0){
        ans += '-1\n'
      }else{
        ans += `${list[list.length-1]}\n`
      }
      break;
  }
};
x.forEach( (el, i) =>
  {
    calc(el.split(' '), lis); 
  }
);
console.log(ans);