define(["moduleA","moduleB"],function(a, b){
  var sum=a.sum;
  var increase=b.increase;
  var decrease=b.decrease;

  console.log(sum(6,7,8));   //21
  console.log(increase(100));   //101
  console.log(decrease(100));   //99
})
