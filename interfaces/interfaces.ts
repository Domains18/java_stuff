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
    PhoneNumber: string;
    Password: string;
}



export interface Books{
    Title: string;
    Description: string;
    
}

export interface Order {
    Email: string;
    Phone: string;
    UserID: string;
    User: User[]
}
