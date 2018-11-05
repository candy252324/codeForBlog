define(["moduleA"],function(a){
  function increase(val){
    return a.sum(val,1);
  }
  function decrease(val){
    return a.sum(val, -1);
  }
  return {
    increase:increase,
    decrease:decrease
  }
})
