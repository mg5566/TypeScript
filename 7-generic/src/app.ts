// const names: string[] = [];
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(" "));
});

// generic func
const mergeObj = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

// console.log(mergeObj({ name: "Kang" }, { age: 30 }));
const mergeResult = mergeObj({ name: "Kang" }, { age: 30 });
mergeResult.name;

// const mergeResult2 = mergeObj("Kang", { age: 30 });
// mergeResult2.name;

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "got no value";
  if (element.length === 1) {
    descriptionText = "got 1 element";
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements";
  }
  return [element, descriptionText];
};

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([]));

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

// console.log(extractAndConvert({}, "name"));  // name 이라는 property key 가 존재하지 않기때문이지
console.log(extractAndConvert({ name: "kang", age: 3 }, "age"));
