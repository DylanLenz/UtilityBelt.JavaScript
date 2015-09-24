//checks an input to confirm it is a number and also that it is not NaN.

var confirmNumber = function(input){
        if(typeof input === "number" && !isNaN(input)){
            return true;
                }else{
                    return false;
                }
};
