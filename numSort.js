function numSort(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
    if(array[i] >= array[i+1]){
    array.push(array[i]);
    array.splice(i,1);
  }else if(array[i] < array[i+1]){
    array.push(array[i+1]);
    array.splice(i+1,1);
  }}}return array;};
