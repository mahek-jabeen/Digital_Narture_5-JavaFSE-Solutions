package com.cognizant;

/**
 * JPA Example
 *
 * JPA is a specification that defines the contract for object-relational mapping.
 * It does not provide an implementation by itself.
 * The actual persistence provider is supplied by a JPA implementation such as Hibernate.
 */
public class JpaExample {

    public void explain() {
        System.out.println("JPA is only a specification.");
        System.out.println("It defines annotations and interfaces for entity mapping and persistence operations.");
    }
}
