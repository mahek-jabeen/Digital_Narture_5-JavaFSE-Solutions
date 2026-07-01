import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Mobile", "Electronics"),
                new Product(105, "Shoes", "Fashion"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Bag", "Fashion")

        };

        System.out.println("===== Linear Search =====");

        Product result1 = SearchAlgorithms.linearSearch(products, 102);

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Product not found.");



        // Sorting for Binary Search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        System.out.println("\n===== Binary Search =====");

        Product result2 = SearchAlgorithms.binarySearch(products, 102);

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Product not found.");

    }
}