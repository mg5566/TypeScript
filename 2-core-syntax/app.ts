console.log("loading");

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

// const number1 = "5";  // type error
const number1 = 5;
const number2 = 2.5;

const result = add(number1, number2);
console.log(result);
