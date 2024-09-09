import java.util.Scanner;

//public static Main {
//    public static void main(String[] args){
//        System.out.println("Hello World");
//    }
//}

//comment

public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        long factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        System.out.println("factorial of " + number + "is: " + factorial);
    }
}