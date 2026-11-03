function isPositive(number){
    return number > 0;
}

function isNegative(number){
    return number < 0;
}

function isZero(number){
    return number === 0;
}

function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return number % 2 !== 0;
}

function describeNumber(number){
    switch(true){
        case isPositive(number):
            return "The number is positive";
        case isNegative(number):
            return "The number is negative";
        case isZero(number):
            return "The number is zero";
        case isEven(number):
            return "The number is even";
        case isOdd(number):
            return "The number is odd";
        default:
            return "The number is not a number";
    }
}
