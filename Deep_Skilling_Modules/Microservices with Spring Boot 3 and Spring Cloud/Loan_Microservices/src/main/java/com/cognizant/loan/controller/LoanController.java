package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(LoanController.class);

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {

        LOGGER.info("START getLoan()");

        Loan loan = new Loan(
                number,
                "Car",
                400000,
                3258,
                18
        );

        LOGGER.info("END getLoan()");

        return loan;
    }
}