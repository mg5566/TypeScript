var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result : " + num);
};
printResult(add(5, 2));
// const add = (n1: number, n2: number) => {
//   return n1.toString() + n2.toString();
// }
var someFunc;
someFunc = add;
// someFunc = printResult;  // error
// someFunc = 5;  // error
console.log(someFunc(5, 5));
