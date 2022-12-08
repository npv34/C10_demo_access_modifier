import Staff from "./Staff";

class StaffManager {
    staffs: Staff[] = [];

    showListStaff(): Staff[] {
        return this.staffs;
    }

    add(staff: Staff): void {
        this.staffs.push(staff);
    }

    checkAccount(email: string,
                 password: string): boolean {
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getEmail() ===  email &&
                this.staffs[i].getPassword() === password
            ) {
                return true;
            }
        }
        return false;
    }


}

export default StaffManager
