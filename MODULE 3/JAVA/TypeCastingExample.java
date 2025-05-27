public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int castedInt = (int) myDouble;  // double to int
        System.out.println("Double value: " + myDouble);
        System.out.println("After casting to int: " + castedInt);

        int myInt = 100;
        double castedDouble = (double) myInt;  // int to double
        System.out.println("Int value: " + myInt);
        System.out.println("After casting to double: " + castedDouble);
    }
}