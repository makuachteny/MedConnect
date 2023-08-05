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

# Insert data into the Doctors table
doctors_data = [
    ("1001", "Dr. Smith", "123 Main St City", "555-123-4567", "Cardiology", "General Hospital"),
    ("1002", "Dr. Johnson", "456 Main St City", "555-987-6543", "Pediatrics", "Children's Clinic"),
    ("1003", "Dr. Davis", "789 Main St City", "555-555-5555", "Dermatology", "Skin & Wellness Center"),
]

insert_doctor_query = "INSERT INTO Doctors (Id, DoctorName, Address, Phone_Number, Specialty, Hospital) VALUES (%s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_doctor_query, doctors_data)

# Insert data into the Patients table
patients_data = [
    ("1001", "John Doe", "1990-05-15", "Male", "123-456-7890", "1"),
    ("1002", "Jane Smith", "1985-08-20", "Female", "987-654-3210", "2"),
    ("1003", "Michael Johnson", "1978-03-10", "Male", "555-123-4567", "3"),
]

insert_patient_query = "INSERT INTO Patients (ID, Patient_Name, DateOfBirth, Gender, Phone_Number, DoctorID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_patient_query, patients_data)

# Commit changes and close the cursor and connection
db.commit()
cursor.close()
db.close()