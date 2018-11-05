var sum=require("./moduleA.js").sum;
function increase(val){
  return sum(val,1);
}
function decrease(val){
  return sum(val, -1);
}
module.exports={
  increase:increase,
  decrease:decrease
}
