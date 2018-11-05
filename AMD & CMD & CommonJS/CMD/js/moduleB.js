define(function(require,exports,module){
  var sum=require("moduleA").sum;
  exports.increase=function(val){
    return sum(val,1);
  }
  exports.decrease=function(val){
    return sum(val,-1);
  }
})
