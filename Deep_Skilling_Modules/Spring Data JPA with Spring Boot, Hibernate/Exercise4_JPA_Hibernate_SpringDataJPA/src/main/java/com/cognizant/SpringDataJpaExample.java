package com.cognizant;

import com.cognizant.model.Employee;
import com.cognizant.repository.EmployeeRepository;

/**
 * Spring Data JPA Example
 *
 * Spring Data JPA removes boilerplate repository code and provides convenient methods for data access.
 */
public class SpringDataJpaExample {

    private final EmployeeRepository employeeRepository;

    public SpringDataJpaExample(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
        System.out.println("Employee saved using Spring Data JPA repository.");
    }
}
