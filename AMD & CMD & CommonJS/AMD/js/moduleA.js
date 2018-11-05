define(function(){
  function sum(){
    var total=0, i=0, len=arguments.length;
    while(i<len){
      total +=arguments[i++];
    }
    return total;
  };
  return {sum:sum};
})
