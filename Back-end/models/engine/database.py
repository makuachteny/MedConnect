import sqlite3

class DatabaseManager:
    def __init__(self, db_filename):
        self.connection = sqlite3.connect(db_filename)
        self.cursor = self.connection.cursor()

    def create_patients_table(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS patients (
                id INTEGER PRIMARY KEY,
                name TEXT,
                address TEXT,
                phone_number TEXT,
                username TEXT,
                dob TEXT,
                medical_history TEXT,
                insurance_info TEXT
            )
        ''')
        self.connection.commit()

    def create_appointments_table(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS appointments (
                id INTEGER PRIMARY KEY,
                patient_id INTEGER,
                procedure_type TEXT,
                date_time TEXT,
                FOREIGN KEY (patient_id) REFERENCES patients (id)
            )
        ''')
        self.connection.commit()

    def insert_patient(self, name, address, phone_number, username, dob, medical_history, insurance_info):
        self.cursor.execute('''
            INSERT INTO patients (name, address, phone_number, username, dob, medical_history, insurance_info)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (name, address, phone_number, username, dob, medical_history, insurance_info))
        self.connection.commit()

    def insert_appointment(self, patient_id, procedure_type, date_time):
        self.cursor.execute('''
            INSERT INTO appointments (patient_id, procedure_type, date_time)
            VALUES (?, ?, ?)
        ''', (patient_id, procedure_type, date_time))
        self.connection.commit()

    def get_all_patients(self):
        self.cursor.execute('SELECT * FROM patients')
        return self.cursor.fetchall()

    def get_all_appointments(self):
        self.cursor.execute('SELECT * FROM appointments')
        return self.cursor.fetchall()

    def close(self):
        self.connection.close()
