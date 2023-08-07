from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data for patients and doctors (you can replace this with your actual data)
Patients_DataBase = {}
Doctors_DataBase = {}

@app.route('/api/patients', methods=['GET'])
def get_all_patients():
    return jsonify(Patients_DataBase)

@app.route('/api/patients/<int:patient_id>', methods=['GET'])
def get_patient_by_id(patient_id):
    if patient_id in Patients_DataBase:
        return jsonify(Patients_DataBase[patient_id])
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

@app.route('/api/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    patient_id = len(Patients_DataBase) + 1
    data['patient_id'] = patient_id
    Patients_DataBase[patient_id] = data
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
    app.run(debug=True)
