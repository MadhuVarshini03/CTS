public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;  // Multiplication has higher precedence
        int result2 = (10 + 5) * 2; // Parentheses change the order

        System.out.println("10 + 5 * 2 = " + result1);
        System.out.println("(10 + 5) * 2 = " + result2);

        int complex = 10 + 5 * 2 - 8 / 4;
        System.out.println("10 + 5 * 2 - 8 / 4 = " + complex);
    }
}