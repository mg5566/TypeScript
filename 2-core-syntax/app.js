// const combine = (input1: string, input2: string) => {
var combine = function (input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);
var combinedRole = combine(1, 2, "as-text");
console.log(combinedRole);
var combinedNames = combine("Mike", "Kang", "as-text");
console.log(combinedNames);
