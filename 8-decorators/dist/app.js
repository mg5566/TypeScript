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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// ---
const Log = (target, propertyName) => {
    console.log("Property decorator!");
    console.log(target, propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log4 = (target, name, position) => {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    setPrice(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "setPrice", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
