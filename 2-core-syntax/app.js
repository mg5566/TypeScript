console.log("loading");
var add = function (num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
// const number1 = "5";  // type error
var number1 = 5;
var number2 = 2.5;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
