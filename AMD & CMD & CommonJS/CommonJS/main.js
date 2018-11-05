var sum=require("./moduleA.js").sum;
var increase=require("./moduleB.js").increase;
var decrease=require("./moduleB.js").decrease;

console.log(sum(6,7,8));   //21
console.log(increase(100));   //101
console.log(decrease(100));   //99
