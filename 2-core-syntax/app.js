// const combine = (input1: string, input2: string) => {
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 20);
console.log(combinedAges);
var combinedNames = combine("Mike", "Kang");
console.log(combinedNames);
