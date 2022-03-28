type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
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
