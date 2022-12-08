class Staff {
    private readonly username: string;
    private readonly email: string;
    private readonly password: string;
    public static companyName: string = "CodeGym";

    constructor(username: string,
                email: string,
                password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

     getUsername(): string {
        return this.username;
     }

     getEmail(): string {
        return this.email;
     }

     getPassword(): string {
        return this.password;
     }

     static getMessage(): string {
        return "xin chao"
     }
}

export default Staff;
