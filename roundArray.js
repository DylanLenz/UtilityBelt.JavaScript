//round array function
var roundData = function(array){
  var answer = [];
  for (var i = 0, a = 1, b = 2; answer.length < array[0]; i++){
      var result = array[a] / array[b];
      result = Math.round(result);
      answer.push(result);
      a +=2;
      b +=2;}
      return answer.join(" ");};
