import User from "./userProfile.js";
import {add, subtract} from "./operations.js";

const user = new User('kevin', 26);
user.age = add(user.age, 1);
console.log(user.age);
user.age = subtract(user.age, 1);
console.log(user.age);