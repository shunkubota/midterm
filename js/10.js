function toOrdinalNumber(a){
  if(a == 1){
    return "1st";
  }
  if(a == 2){
    return "2nd";
  }
  if(a == 3){
    return "3rd";
  }
  if(a >= 4 && a <= 20){
    return a + "th";
  }
}
