package com.cognizant;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Teardown completed");
    }

    @Test
    void testAddition() {
        int firstNumber = 4;
        int secondNumber = 6;

        int result = calculator.add(firstNumber, secondNumber);

        assertEquals(10, result);
        System.out.println("testAddition executed successfully");
    }

    @Test
    void testSubtraction() {
        int firstNumber = 10;
        int secondNumber = 4;

        int result = calculator.subtract(firstNumber, secondNumber);

        assertEquals(6, result);
        System.out.println("testSubtraction executed successfully");
    }
}
