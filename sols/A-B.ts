const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split(" ");

const inputList: number[] = input.map(Number);
console.log(inputList[0] - inputList[1]);
