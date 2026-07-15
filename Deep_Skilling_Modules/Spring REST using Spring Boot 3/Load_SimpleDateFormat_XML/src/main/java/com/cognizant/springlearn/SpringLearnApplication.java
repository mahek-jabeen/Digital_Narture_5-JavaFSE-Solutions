package com.cognizant.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        logger.info("Inside main()");
        displayDate();
    }

    private static void displayDate() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        try {
            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
            Date date = format.parse("31/12/2018");

            System.out.println("=================================");
            System.out.println("Parsed Date :");
            System.out.println(date);
            System.out.println("=================================");
        } catch (Exception e) {
            logger.error("Error while parsing date", e);
            throw new RuntimeException(e);
        } finally {
            context.close();
        }
    }
}
