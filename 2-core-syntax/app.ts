// const combine = (input1: string, input2: string) => {
const combine = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedRole = combine(1, 2, "as-text");
console.log(combinedRole);

const combinedNames = combine("Mike", "Kang", "as-text");
console.log(combinedNames);
