function odd1to20() {
    var result = [];
    
    for(var i = 1; i <= 20; i++){

        if(i%2 != 0) result.push(i);

    }
    return result;
}




function decDivBy3From100() {
    var result = [];

    for(var i = 100; i > 0; i--){

        if(i%3 == 0) result.push(i);

    }
    return result;
}





function printSequence() {
    var result = [];

    for(var i = 4; i >= -3.5; i = i - 1.5){

        result.push(i);

    }
    return result;
}





function sigma() {
    var sum = 0;

    for(var i = 1; i <= 100; i++){

        sum += i;

    }
    return sum;
}





function Factorial() {
    var product = 1;

    for(var i = 2; i <= 12; i++){

        product = product * i;

    }
    return product;
}