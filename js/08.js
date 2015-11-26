function isLeapYear(number){
  var testA = number % 4 == 0;
  var testB = number % 100 != 0;
  var testC = number % 100 == 0;
  var testD = number % 400 != 0;
  var testE = number % 400 == 0;
  if (testA && testB){
    return true;
  }
  if (testA && testC && testD){
    return false;
  }
  if (testA && testE){
    return true;
  }else{
    return false;
  }
}
