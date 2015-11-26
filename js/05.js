function fizzbuzz(a){
  if(a % 3 == 0){
    return "fizz";
  }
  if(a % 5 == 0){
    return "buzz";
  }
  var testA = (a % 3 == 0);
  var testB = (a % 5 == 0);
  if(testA && testB){
    return "fizzbuzz";
  }
}
