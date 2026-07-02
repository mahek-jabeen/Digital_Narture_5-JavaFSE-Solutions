SET SERVEROUTPUT ON;

-- Scenario 1

BEGIN

    ProcessMonthlyInterest;

END;
/

-- Scenario 2

BEGIN

    UpdateEmployeeBonus('IT',10);

END;
/

-- Scenario 3

BEGIN

    TransferFunds(1001,1002,1000);

END;
/

-- Verify Results

SELECT * FROM Accounts;

SELECT * FROM Employees;