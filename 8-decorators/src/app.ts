// const Logger = (constructor: Function) => {
//   console.log("Logging...");
//   console.log(constructor);
// };

const Logger = (logString: string) => {
  console.log("LOGGER FACTORY");
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  console.log("TEMPLATE FACTORY");
  return (_: Function) => {
    console.log("Rendering template");
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
    }
  };
};

@Logger("Log - Person")
@WithTemplate("<h1>What the?!....<h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person Object");
  }
}

const person = new Person();
console.log(person);
