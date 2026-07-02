SET SERVEROUTPUT ON;

DECLARE

    CURSOR loan_cursor IS

    SELECT c.CustomerName,
           l.LoanID,
           l.EndDate

    FROM Customers c

    JOIN Loans l

    ON c.CustomerID=l.CustomerID

    WHERE l.EndDate
    BETWEEN SYSDATE
    AND SYSDATE+30;

BEGIN

    FOR loan_record IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(

        'Reminder: Dear '

        ||loan_record.CustomerName

        ||', your Loan ID '

        ||loan_record.LoanID

        ||' is due on '

        ||TO_CHAR
        (loan_record.EndDate,
        'DD-MON-YYYY')

        );

    END LOOP;

END;
/