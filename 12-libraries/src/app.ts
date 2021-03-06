import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { validate } from "class-validator";

import { Product } from "./product.model";

// const p1 = new Product("A Book", 30);

// console.log("p1", p1.getInformation());

const products = [
  { title: "MacBook", price: 290 },
  { title: "A Book", price: 30 },
];

const newProd = new Product("", -23);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATE FAIL", errors);
  } else {
    console.log("newProduct", newProd.getInformation());
  }
});

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
