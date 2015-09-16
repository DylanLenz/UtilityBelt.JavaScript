//convert string of data to numbers
var numberConverter = function (){
  var numbers = prompt("Input numbers: ");
  var numArray = numbers.split(" ");
  for (var x = 0; x < numArray.length; x++){
    numArray[x]=Number(numArray[x]);}
  return console.log(numArray);
};
