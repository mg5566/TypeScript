const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number) => {
  console.log("Result : " + num);
};

printResult(add(5, 2));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

let someFunc: (n1: number, n2: number) => number;
someFunc = add;

console.log(someFunc(5, 5));
