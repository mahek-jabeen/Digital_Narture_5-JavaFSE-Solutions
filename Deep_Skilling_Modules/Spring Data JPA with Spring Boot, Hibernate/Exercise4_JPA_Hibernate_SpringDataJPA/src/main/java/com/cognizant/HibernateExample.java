package com.cognizant;

import com.cognizant.model.Employee;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * Hibernate Example
 *
 * This class demonstrates how a Hibernate Session and Transaction are used to persist an entity.
 */
public class HibernateExample {

    private final Session session;

    public HibernateExample(Session session) {
        this.session = session;
    }

    public void addEmployee(Employee employee) {
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.persist(employee);
            transaction.commit();
            System.out.println("Employee saved using Hibernate Session.");
        } catch (Exception ex) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw ex;
        }
    }
}
