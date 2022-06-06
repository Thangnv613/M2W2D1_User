"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return this.name + "," + this.email + "," + this.role;
    }
    isAdmin() {
        if (this.role == 1) {
            return 'Đây là admin';
        }
        return 'Đây là người dùng binh thường';
    }
}
exports.User = User;
