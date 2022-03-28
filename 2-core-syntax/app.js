var person = {
    name: "Kang",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
// person.role[1] = 10; // error
person.role = [5, "admin"];
// person.role = [4, "admin", "user"];  // error
// let favoriteActivities: any[];
// favoriteActivities = ["Sport", 1]
var favoriteActivities;
favoriteActivities = ["Sport"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
