"use strict";
// const Logger = (constructor: Function) => {
//   console.log("Logging...");
//   console.log(constructor);
// };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Logger = (logString) => {
    console.log("LOGGER FACTORY");
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    console.log("TEMPLATE FACTORY");
    return (_) => {
        console.log("Rendering template");
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
            hookElement.innerHTML = template;
        }
    };
};
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person Object");
    }
};
Person = __decorate([
    Logger("Log - Person"),
    WithTemplate("<h1>What the?!....<h1>", "app")
], Person);
const person = new Person();
console.log(person);
