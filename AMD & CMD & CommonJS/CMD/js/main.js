define(function(require,exports,module){
  var sum=require("moduleA").sum;
  var increase=require("moduleB").increase;
  var decrease=require("moduleB").decrease;

  console.log(sum(4,5,6));   //15
  console.log(increase(150));   //151
  console.log(decrease(150));   //149

})
