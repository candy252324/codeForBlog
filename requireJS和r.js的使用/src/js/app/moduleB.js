define(function(require,exports,module){
  var sum=require("moduleA").sum;
  console.log(sum(1,2));    //3
})
