SET SERVEROUTPUT ON;

DECLARE

    CURSOR customer_cursor IS

    SELECT CustomerID,
           Balance
    FROM Customers;

BEGIN

    FOR customer_record IN customer_cursor LOOP

        IF customer_record.Balance>10000 THEN

            UPDATE Customers

            SET IsVIP='TRUE'

            WHERE CustomerID=
            customer_record.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
            'Customer '
            ||customer_record.CustomerID
            ||' promoted to VIP');

        END IF;

    END LOOP;

    COMMIT;

END;
/