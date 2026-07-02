-- Create Customers Table

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    DOB DATE,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5)
);

-- Create Loans Table

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    EndDate DATE,
    CONSTRAINT fk_customer
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);