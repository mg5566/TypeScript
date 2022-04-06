"use strict";
let add;
add = (a, b) => {
    return a + b;
};
class Person {
    constructor(n, a) {
        if (n) {
            this.name = n;
        }
        if (a) {
            this.age = a;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(this.name + ": " + phrase);
        }
        else {
            console.log("Hello I have not name yet");
        }
    }
}
let user1;
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
