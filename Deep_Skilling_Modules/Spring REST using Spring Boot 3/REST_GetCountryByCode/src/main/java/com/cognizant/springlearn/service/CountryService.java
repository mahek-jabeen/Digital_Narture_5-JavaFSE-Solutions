package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger logger = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        logger.info("START - getCountry()");

        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            List<Country> countryList = context.getBean("countryList", List.class);
            for (Country country : countryList) {
                if (country.getCode().equalsIgnoreCase(code)) {
                    logger.info("END - getCountry()");
                    return country;
                }
            }
        }

        logger.info("END - getCountry()");
        return null;
    }
}
