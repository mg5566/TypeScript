"use strict";
// const add = (n1: number, n2: number) => n1 + n2;
// // 이렇게 하면 쌉가능
// const printResult: (input: string | number) => void = (input) =>
//   console.log(input);
// printResult(add(4, 4));
const hobbies = ["sport", "cooking"];
const activeHobbies = ["hiking"];
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
const person = {
    name: "Kang",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
// const add = (...numbers: number[]) => {
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
// add(1, 2, 3, 4);  // array
add(1, 2, 3); // tuple
