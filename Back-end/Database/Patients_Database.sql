-- The Patients database
-- Date: 2019/11/20

-- Create database
CREATE DATABASE Patients;
INSERT INTO Patients (PatientID, FirstName, LastName, DateOfBirth, Gender, ContactNumber, CreatedAt)
VALUES
    (1, 'John', 'Doe', '1990-05-15', 'Male', '123-456-7890', NOW()),
    (2, 'Jane', 'Smith', '1985-08-20', 'Female', '987-654-3210', NOW()),
    (3, 'Michael', 'Johnson', '1978-03-10', 'Male', '555-123-4567', NOW());



