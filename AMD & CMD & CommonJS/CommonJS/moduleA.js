exports.sum=function(){
  var value=0, i=0, len=arguments.length;
  while(i<len){
    value +=arguments[i++];
  }
  return value;
}
