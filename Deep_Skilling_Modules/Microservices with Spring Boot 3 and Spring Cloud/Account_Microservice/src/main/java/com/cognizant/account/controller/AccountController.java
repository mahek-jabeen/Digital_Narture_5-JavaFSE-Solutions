package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AccountController.class);

    @GetMapping("/{number}")
    public Account getAccount(@PathVariable String number) {

        LOGGER.info("START getAccount()");

        Account account = new Account(
                number,
                "Savings",
                234343
        );

        LOGGER.info("END getAccount()");

        return account;
    }

}