import java.util.Stack;

public class Example2 {
    private static final int MAX_VALUE = 1048575;  // 2^20 - 1 for 20-bit unsigned integer
    private static final int MIN_VALUE = 0;

    public static String processOperations(String operations) {
        Stack<Integer> stack = new Stack<>();
        String[] ops = operations.split(" ");

        for (String op : ops) {
            switch (op) {
                case "POP":
                    if (stack.isEmpty()) {
                        return "Error: Stack is empty.";
                    }
                    stack.pop();
                    break;
                case "DUP":
                    if (stack.isEmpty()) {
                        return "Error: Stack is empty.";
                    }
                    stack.push(stack.peek());
                    break;
                case "+":
                    if (stack.size() < 2) {
                        return "Error: Not enough values on the stack.";
                    }
                    int b = stack.pop();
                    int a = stack.pop();
                    long sum = (long) a + b;
                    if (sum > MAX_VALUE) {
                        return "Error: Overflow.";
                    }
                    stack.push((int) sum);
                    break;
                case "-":
                    if (stack.size() < 2) {
                        return "Error: Not enough values on the stack.";
                    }
                    int subB = stack.pop();
                    int subA = stack.pop();
                    long difference = (long) subA - subB;
                    if (difference < MIN_VALUE) {
                        return "Error: Underflow.";
                    }
                    stack.push((int) difference);
                    break;
                default:
                    try {
                        int x = Integer.parseInt(op);
                        if (x < MIN_VALUE || x > MAX_VALUE) {
                            return "Error: Integer out of range.";
                        }
                        stack.push(x);
                    } catch (NumberFormatException e) {
                        return "Error: Invalid operation.";
                    }
                    break;
            }
        }

        if (stack.isEmpty()) {
            return "Error: Stack is empty.";
        }

        return String.valueOf(stack.peek());
    }

    public static void main(String[] args) {
        String operations = "4 5 6 - 7 +";
        System.out.println(processOperations(operations));  // Example usage
    }
}
