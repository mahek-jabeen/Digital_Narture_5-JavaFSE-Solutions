SET SERVEROUTPUT ON;

DECLARE

    CURSOR customer_cursor IS

    SELECT c.CustomerID,
           c.DOB,
           l.LoanID
    FROM Customers c
    JOIN Loans l
    ON c.CustomerID=l.CustomerID;

    v_age NUMBER;

BEGIN

    FOR customer_record IN customer_cursor LOOP

        v_age:=FLOOR(MONTHS_BETWEEN
        (SYSDATE,customer_record.DOB)/12);

        IF v_age>60 THEN

            UPDATE Loans
            SET InterestRate=InterestRate-1
            WHERE LoanID=customer_record.LoanID;

            DBMS_OUTPUT.PUT_LINE(
            '1% Discount Applied to Customer ID : '
            ||customer_record.CustomerID);

        END IF;

    END LOOP;

    COMMIT;

END;
/