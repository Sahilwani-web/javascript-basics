const mySym = "Key1"
const user = {
    name : "Sahil",
    age: 24,
    isLoggedIn: true,
    fullName: "SahilWani",
    [mySym] : "Mykey"
}
console.log(user);

console.log(user.fullName);
user.age = 34;
console.log(user.age);
console.log(user[mySym]);