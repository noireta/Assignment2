
let numCollect = prompt("Enter your choice the number");
if (numCollect >= 1 && numCollect <= 100){
if (numCollect >= 60 && numCollect <= 69){
    document.write("You receive a D");
  }else if(numCollect >= 80 && numCollect <= 89){
    document.write("You receive a C");
  }else if(numCollect >= 90 && numCollect <= 100){
    document.write("You receive a B"); 
  }else{
    document.write("You receive a F"); 
  }
}else{
 document.write("Only numbers between 1 and 100 are accepted");
}