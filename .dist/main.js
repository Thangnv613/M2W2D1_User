"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
let user = new user_1.User('Thang', 'dadadad@gmail.com', 2);
console.log(user.getInfo());
console.log(user.isAdmin());
