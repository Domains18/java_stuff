export interface Admin {
    FirstName: string
    LastName: string
    Role: string
    Email: string
    PhoneNumber: string
    Password: String
}


export interface User {
    FirstName: string;
    LastName: string;
    Email: string;
}



export interface Books{}

export interface Order {
    Email: string;
    Phone: string;
    UserID: string;
    User: User[]
}
