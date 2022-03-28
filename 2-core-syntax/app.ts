const person = {
  name: "Kang",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivities: any[];
// favoriteActivities = ["Sport", 1]
let favoriteActivities: string[];
favoriteActivities = ["Sport"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
