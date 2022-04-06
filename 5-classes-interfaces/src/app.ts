// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age?: number;

  constructor(n?: string, a?: number) {
    if (n) {
      this.name = n;
    }
    if (a) {
      this.age = a;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(this.name + ": " + phrase);
    } else {
      console.log("Hello I have not name yet");
    }
  }
}

let user1: Greetable;

// user1 = {
//   name: "Kang",
//   age: 30,
//   greet(phrase: string) {
//     console.log(this.name + ": " + phrase);
//   },
// };
// user1 = new Person("Mike", 30);
user1 = new Person();

user1.greet("Hello MotherFuckers");
