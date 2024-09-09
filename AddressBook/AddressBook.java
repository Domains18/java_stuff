package AddressBook;

import java.util.ArrayList;
import java.util.Scanner;

public class AddressBook {
    static ArrayList<Contact> contacts = new ArrayList<Contact>();
    static Scanner input = new Scanner(System.in);


    //main function
    public static void main(String[] args) {
        int choice;

        do {
            System.out.println("Address Book application");
            System.out.println("1. Add Contact");
            System.out.println("2. View Contacts");
            System.out.println("3. Search Contact");
            System.out.println("4. Delete Contact");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = input.nextInt();

            switch (choice) {
                case 1:
                    addContact();
                    break;
                
                case 2:
                    viewContacts();
                    break;

                case 3:
                    searchContact();
                    break;

                case 4:
                    deleteContact();
                    break;
                case 5:
                    System.out.println("exiting gracefully...........");
                    break;

                default:
                    System.out.println("invalid choice");
            }
        } while (choice != 5);
    }
    
    public static void addContact() {
    }
    
    public static void viewContacts() {
    }
    
    
    public static void deleteContact() {

    }
    
    public static void searchContact() {
        
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