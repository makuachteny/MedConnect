--All the tables and relationships for the database

CREATE TABLE Hospitals(
	Hospital_Name VARCHAR2(30),
Hospital_Number NUMBER(3) PRIMARY KEY,
	Hospital_Location VARCHAR2(30),
Hospital_Phone_Number NUMBER(10) UNIQUE
);


CREATE TABLE Doctor(
    Doctor_ID NUMBER(6) PRIMARY KEY,
	Doctor_Name VARCHAR2(20),
Phone_Number NUMBER(5) UNIQUE,
	Specialty VARCHAR2(20),
	Doctor_address VARCHAR2(30) --Same as Hospital Location
    Hospital VARCHAR2(30) --Same as Hospital Name
);


CREATE TABLE Patient(
    Patient_ID NUMBER(6) PRIMARY KEY,
    Patient_Name VARCHAR2(20),
	Patient_Phone_Number NUMBER(10) UNIQUE,
	Date_of_birth DATE,
	Gender VARCHAR2(1),
	Patient_Location VARCHAR2(30)
);

CREATE TABLE Appointment(
    Appointment_ID NUMBER(6) PRIMARY KEY,
    Appointment_Date DATE,
    Appointment_Time DATE,
    Patient_ID NUMBER(6),
    Doctor_ID NUMBER(6),
    Clinic_Number NUMBER(3),
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID),
    FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID),
    FOREIGN KEY (Clinic_Number) REFERENCES Hospitals(Clinic_Number)
);



--Creating Relationship Tables:

-- CREATE TABLE Patient_Doctor(
--     Patient_ID NUMBER(6),
--     Doctor_ID NUMBER(6),
--     PRIMARY KEY (Patient_ID, Doctor_ID),
--     FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID),
--     FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID)
-- );