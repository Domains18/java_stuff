package AddressBook;

import java.util.ArrayList;
import java.util.Scanner;

public class AddressBook {
    static ArrayList<Contact> contacts = new ArrayList<Contact>();
    static Scanner input = new Scanner(System.in);


    //main function
    public static void main(String[] args) {
        int choice;

        do{
            System.out.println("Address Book application");
        } while (choice != 5);
    }
}

class Contact {
    private String name;
    private String address;
    private String phone;
    private String email;


    public Contact(String name, String address, String phone, String email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String toString() {
        return "Name: " + name + "\nAddress: " + address
                + "\nPhone: " + phone + "\nEmail: " + email;
    }
}