public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("Application Started");

        Logger logger2 = Logger.getInstance();
        logger2.log("User Logged In");

        Logger logger3 = Logger.getInstance();
        logger3.log("Application Closed");

        System.out.println();

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }
    }
}