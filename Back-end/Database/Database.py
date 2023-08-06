import mysql.connector

# Create a connection to the MySQL database
db = mysql.connector.connect(
    host="Localhost",
    user="",
    password="",
    database="MedConnect"
)

# Create a cursor object to interact with the database
cursor = db.cursor()

# Create Doctors table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Doctors (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        DoctorName VARCHAR(255) NOT NULL,
        Address VARCHAR(255),
        Phone_Number VARCHAR(20),
        Specialty VARCHAR(255),
        Hospital VARCHAR(255)
    )
""")

# Create Patients table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Patients (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        Patient_Name VARCHAR(255) NOT NULL,
        DateOfBirth DATE,
        Gender ENUM('Male', 'Female', 'Other'),
        Phone_Number VARCHAR(20),
        DoctorID INT,
        FOREIGN KEY (DoctorID) REFERENCES Doctors(ID)
    )
""")

# Create Appointments table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Appointments (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        Date DATE,
        Time TIME,
        PatientID INT,
        DoctorID INT,
        FOREIGN KEY (PatientID) REFERENCES Patients(ID),
        FOREIGN KEY (DoctorID) REFERENCES Doctors(ID)
    )
""")

# Create Hospitals table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Hospitals (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        Hospital_Name VARCHAR(255) NOT NULL,
        Address VARCHAR(255),
        Phone_Number VARCHAR(20)
    )
""")
# Insert data into the Doctors table
doctors_data = [
    ("1001", "Dr. Smith", "123 Main St City", "555-123-4567", "Cardiology", "General Hospital"),
    ("1002", "Dr. Johnson", "456 Main St City", "555-987-6543", "Pediatrics", "Children's Clinic"),
    ("1003", "Dr. Davis", "789 Main St City", "555-555-5555", "Dermatology", "Skin & Wellness Center"),
]

insert_doctor_query = "INSERT INTO Doctors (ID, DoctorName, Address, Phone_Number, Specialty, Hospital) VALUES (%s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_doctor_query, doctors_data)

# Insert data into the Patients table
patients_data = [
    ("1001", "John Doe", "1990-05-15", "Male", "123-456-7890", "1"),
    ("1002", "Jane Smith", "1985-08-20", "Female", "987-654-3210", "2"),
    ("1003", "Michael Johnson", "1978-03-10", "Male", "555-123-4567", "3"),
]

insert_patient_query = "INSERT INTO Patients (ID, Patient_Name, DateOfBirth, Gender, Phone_Number, DoctorID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_patient_query, patients_data)

# Insert data into the Appointments table
appointments_data = [
    ("1001", "2021-05-15", "10:00:00", "23456778", "1001"),
    ("1002", "2021-05-15", "11:00:00", "2334567778", "1002"),
    ("1003", "2021-05-15", "12:00:00", "8996242526", "1003"),
]

insert_appointment_query = "INSERT INTO Appointments (ID, Date, Time, PatientID, DoctorID) VALUES (%s, %s, %s, %s, %s)"
cursor.executemany(insert_appointment_query, appointments_data)

# Insert data into the hospitals table
hospitals_data = [
    ("1001", "Kanombe Hospital", "123 Main St City", "555-123-4567"),
    ("1002", "Plateau Poly-Clinic", "456 Main St City", "555-987-6543"),
    ("1003", "King Faisal Hospital", "789 Main St City", "555-555-5555"),
    ("1004", "CHUK", "789 Main St City", "555-555-5555")
    ("1005", "CHUB", "789 Main St City", "555-555-5555")
    ("1006", "PolyFam Poly-Clinic", "789 Main St City", "555-555-5555")
]

insert_hospital_query = "INSERT INTO Hospitals (ID, Hospital_Name, Address, Phone_Number) VALUES (%s, %s, %s, %s)"
cursor.executemany(insert_hospital_query, hospitals_data)

# Create PatientsReports table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS PatientsReports (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        PatientID INT,
        Report TEXT,
        ReportDate DATE,
        FOREIGN KEY (PatientID) REFERENCES Patients(ID)
    )
""")

# Insert data into the PatientsReports table
reports_data = [
    ("1", "Patient 1's report", "2021-05-15"),
    ("2", "Patient 2's report", "2021-05-16"),
    ("3", "Patient 3's report", "2021-05-17"),
]
insert_report_query = "INSERT INTO PatientsReports (PatientID, Report, ReportDate) VALUES (%s, %s, %s)"
cursor.executemany(insert_report_query, reports_data)


# Commit changes and close the cursor and connection
db.commit()
cursor.close()
db.close()