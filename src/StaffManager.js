"use strict";
exports.__esModule = true;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.staffs = [];
    }
    StaffManager.prototype.showListStaff = function () {
        return this.staffs;
    };
    StaffManager.prototype.add = function (staff) {
        this.staffs.push(staff);
    };
    StaffManager.prototype.checkAccount = function (email, password) {
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getEmail() === email &&
                this.staffs[i].getPassword() === password) {
                return true;
            }
        }
        return false;
    };
    return StaffManager;
}());
exports["default"] = StaffManager;
