import Staff from "./src/Staff";
import StaffManager from "./src/StaffManager";
import staff from "./src/Staff";

let staff1 = new Staff('hungcoi', 'hungcoi@gmail.com','1234');
let staff2 = new Staff('ngocanh', 'ngocanh@gmail.com','3456');

let staffManager = new StaffManager();
staffManager.add(staff1);
staffManager.add(staff2);


console.log(Staff.getMessage())

console.table(staffManager.checkAccount('luan@gmail.com','1234'))
