// const names: string[] = [];
// const names: Array<string> = [];

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

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Kang");
textStorage.addItem("Mike");
console.log(textStorage.getItem());
textStorage.removeItem("Kang");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Kang" });
// objectStorage.addItem({ name: "Mike" });
// objectStorage.removeItem({ name: "Kang" });
// console.log(objectStorage.getItem()); // [{name: "Kang"}]

// objectStorage.removeItem({ name: "Mike" });
// console.log(objectStorage.getItem()); // []

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ["Kang", "Mike"];  // string[]
names.push("Hacker");
names.pop();
