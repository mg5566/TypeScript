// type Admin = {
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}
// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Kang",
  privileges: ["Create-Server"],
  startDate: new Date(),
};

type Combinale = string | number;
type Numeric = number | boolean;

type Universal = Combinale & Numeric;
// const uni: Universal = "Fuck";
// const uni: Universal = 20;
// const uni: Universal = true;

function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinale, b: Combinale) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("강", "  명 구 ");
result.split(" ");

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // if (typeof emp === "Employee") {}
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck..");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated union type
// interface Bird {
//   flyingSpeed: number;
// }

// interface Horse {
//   runningSpeed: number;
// }
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ("flyingSpeed" in animal) {
  //   console.log("Moving with Speed: ", animal.flyingSpeed);
  // } else if ("runningSpeed" in animal) {
  //   console.log("Moving with Speed: ", animal.runningSpeed);
  // }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with Speed: ", speed);
}

// type casting
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value =
    "Fucking Type Casting is so Awesome";
}

// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;

// userInputElement.value = "Hi there!";



// optional chaining
const fetchedUserData = {
  id: "u1",
  name: "Kang",
  job: { title: "CEO", description: "My Own Company"}
}

console.log(fetchedUserData?.job?.title);  // CEO
// console.log(fetchedUserData.job && fetchedUserData.job.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
