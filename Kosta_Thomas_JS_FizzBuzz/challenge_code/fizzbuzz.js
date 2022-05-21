function fizzBuzz() {
    
    var result = [];
    for(var i = 1; i < 101; i++){
        var isFizzOrBuzz = "";

        if(i%3 == 0) isFizzOrBuzz += "Fizz";
        if(i%5 == 0) isFizzOrBuzz += "Buzz";;
        if(isFizzOrBuzz == "") isFizzOrBuzz = i;

        result.push(isFizzOrBuzz);
    }
    return result;
}

console.log(fizzBuzz());