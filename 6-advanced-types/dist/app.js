"use strict";
var _a;
// type ElevatedEmployee = Admin & Employee;
const e1 = {
    name: "Kang",
    privileges: ["Create-Server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("강", "  명 구 ");
result.split(" ");
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo: " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
    userInputElement.value =
        "Fucking Type Casting is so Awesome";
}
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
// userInputElement.value = "Hi there!";
// optional chaining
const fetchedUserData = {
    id: "u1",
    name: "Kang",
    job: { title: "CEO", description: "My Own Company" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); // CEO
// console.log(fetchedUserData.job && fetchedUserData.job.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
