"use strict";
exports.__esModule = true;
var Staff = /** @class */ (function () {
    function Staff(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    Staff.prototype.getUsername = function () {
        return this.username;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getPassword = function () {
        return this.password;
    };
    Staff.companyName = "CodeGym";
    return Staff;
}());
exports["default"] = Staff;
