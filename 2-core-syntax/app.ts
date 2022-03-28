const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Kang",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = 10; // error
person.role = [5, "admin"];
// person.role = [4, "admin", "user"];  // error

// let favoriteActivities: any[];
// favoriteActivities = ["Sport", 1]
let favoriteActivities: string[];
favoriteActivities = ["Sport"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
