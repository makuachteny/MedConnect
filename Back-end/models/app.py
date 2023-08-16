from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from models import  Hospital, Doctor, Patient, Appointment, PatientsReports
import os




db = SQLAlchemy()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Auca%402020@localhost/hospital_records'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config["SQLALCHEMY_ECHO"] = True
app.config["SQLALCHEMY_RECORD_QUERIES"] = True
db.init_app(app)






# sample_patient_1 = {
#     "name": "John Doe",
#     "phone_number": 35,
#     "username": "Male"
# }


# sample_patient_2 = {
#     "name": "Jane Smith",
#     "phone_number": 28,
#     "username": "Female"
# }


# sample_doctor_1 = {
#     "name": "Dr. Smith",
#     "specialty": "Cardiologist"
# }


# sample_doctor_2 = {
#     "name": "Dr. Johnson",
#     "specialty": "Dermatologist"
# }


Patients_DataBase = {}
# Patients_DataBase[1] = sample_patient_1
# Patients_DataBase[2] = sample_patient_2
Doctors_DataBase = {}
# Doctors_DataBase[1] = sample_doctor_1
# Doctors_DataBase[2] = sample_doctor_2


# @app.route('/api/patients', methods=['GET'])
# def get_all_patients():
# #     return jsonify(Patient.query.all())
#     patients = Patient.query.all()
#     print(patients)
#     patients_list = []
#     for patient in patients:
#         patient_data = {
#             "patient_id": patient.id,
#             "name": patient.Patient_Name,
#             "phone_number": patient.Patient_Phone_Number,
#             "username": patient.Patient_Location
#             # You can add more attributes as needed
#         }
#         patients_list.append(patient_data)


#     return jsonify(patients_list)




@app.route('/api/patients', methods=['GET'])
def get_all_patients():
    patients = Patient.query.all()
    patients_list = []
    for patient in patients:
        patient_data = {
            "patient_id": patient.Patient_ID,
            "name": patient.Patient_Name,
            "phone_number": patient.Patient_Phone_Number,
            "username": patient.Patient_Location
            # You can add more attributes as needed
        }
        patients_list.append(patient_data)


    return patients_list


@app.route('/api/patients/<int:patient_id>', methods=['GET'])
def get_patient_by_id(patient_id):
    patient= Patient.query.get(patient_id)
    if patient:
        return jsonify(patient)
    else:
        return jsonify({"message": "Patient not found"}), 404


@app.route('/api/doctors', methods=['GET'])
def get_all_doctors():


    return jsonify(Doctors_DataBase)


@app.route('/api/doctors/<int:doctor_id>', methods=['GET'])
def get_doctor_by_id(doctor_id):
    if doctor_id in Doctors_DataBase:
        return jsonify(Doctors_DataBase[doctor_id])
    else:
        return jsonify({"message": "Doctor not found"}), 404




# def add_patient():
#     data = request.get_json()
#     patient_id = len(Patients_DataBase) + 1
#     data['patient_id'] = patient_id
#     Patients_DataBase[patient_id] = data
#     return jsonify({"message": "Patient added successfully"}), 201


@app.route('/api/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    new_patient = Patient(Patient_Name=data['name'], Patient_Phone_Number=data['phone_number'], Patient_Location=data['username'])
    db.session.add(new_patient)
    db.session.commit()
    return jsonify({"message": "Patient added successfully"}), 201


@app.route('/api/patients/<int:patient_id>', methods=['PUT'])
def update_patient(patient_id):
    if patient_id in Patients_DataBase:
        data = request.get_json()
        Patients_DataBase[patient_id].update(data)
        return jsonify({"message": "Patient updated successfully"}), 200
    else:
        return jsonify({"message": "Patient not found"}), 404


@app.route('/api/patients/<int:patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    if patient_id in Patients_DataBase:
        del Patients_DataBase[patient_id]
        return jsonify({"message": "Patient deleted successfully"}), 200
    else:
        return jsonify({"message": "Patient not found"}), 404


@app.route('/api/doctors', methods=['POST'])
def add_doctor():
    data = request.get_json()
    doctor_id = len(Doctors_DataBase) + 1
    data['doctor_id'] = doctor_id
    Doctors_DataBase[doctor_id] = data
    return jsonify({"message": "Doctor added successfully"}), 201


@app.route('/api/doctors/<int:doctor_id>', methods=['PUT'])
def update_doctor(doctor_id):
    if doctor_id in Doctors_DataBase:
        data = request.get_json()
        Doctors_DataBase[doctor_id].update(data)
        return jsonify({"message": "Doctor updated successfully"}), 200
    else:
        return jsonify({"message": "Doctor not found"}), 404


@app.route('/api/doctors/<int:doctor_id>', methods=['DELETE'])
def delete_doctor(doctor_id):
    if doctor_id in Doctors_DataBase:
        del Doctors_DataBase[doctor_id]
        return jsonify({"message": "Doctor deleted successfully"}), 200
    else:
        return jsonify({"message": "Doctor not found"}), 404


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
