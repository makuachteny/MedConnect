from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Hospital(db.Model):
    Clinic_Number = db.Column(db.Integer, primary_key=True)
    Hospital_Name = db.Column(db.String(30), nullable=False)
    Hospital_Location = db.Column(db.String(30))
    Hospital_Phone_Number = db.Column(db.String(10), unique=True)
    
    doctors = db.relationship('Doctor', backref='hospital', lazy=True)

class Doctor(db.Model):
    Doctor_ID = db.Column(db.Integer, primary_key=True)
    Doctor_Name = db.Column(db.String(20))
    Phone_Number = db.Column(db.String(5), unique=True)
    Specialty = db.Column(db.String(20))
    Doctor_address = db.Column(db.String(30))
    Hospital_Clinic_Number = db.Column(db.Integer, db.ForeignKey('hospital.Clinic_Number'))

    patients = db.relationship('Patient', backref='doctor', lazy=True)
    appointments = db.relationship('Appointment', backref='doctor', lazy=True)

class Patient(db.Model):
    Patient_ID = db.Column(db.Integer, primary_key=True)
    Patient_Name = db.Column(db.String(20))
    Patient_Phone_Number = db.Column(db.String(10), unique=True)
    Date_of_birth = db.Column(db.Date)
    Gender = db.Column(db.String(1))
    Patient_Location = db.Column(db.String(30))
    Doctor_ID = db.Column(db.Integer, db.ForeignKey('doctor.Doctor_ID'))

    appointments = db.relationship('Appointment', backref='patient', lazy=True)

class Appointment(db.Model):
    Appointment_ID = db.Column(db.Integer, primary_key=True)
    Appointment_Date = db.Column(db.Date)
    Appointment_Time = db.Column(db.Date)
    Patient_ID = db.Column(db.Integer, db.ForeignKey('patient.Patient_ID'))
    Doctor_ID = db.Column(db.Integer, db.ForeignKey('doctor.Doctor_ID'))
    Clinic_Number = db.Column(db.Integer, db.ForeignKey('hospital.Clinic_Number'))

class PatientsReports(db.Model):
    Report_ID = db.Column(db.Integer, primary_key=True)
    Patient_ID = db.Column(db.Integer, db.ForeignKey('patient.Patient_ID'))
    Report = db.Column(db.String(100))
    Report_Date = db.Column(db.Date)
    Report_Time = db.Column(db.Date)
