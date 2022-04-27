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

// ---
const Log = (target: any, propertyName: string | Symbol) => {
  console.log("Property decorator!");
  console.log(target, propertyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor)=>{
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  setPrice(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
