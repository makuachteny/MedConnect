class Patient:
    def __init__(self, patient_id, name, address, phone_number, username, dob, medical_history, insurance_info):
        self.patient_id = patient_id
        self.name = name
        self.address = address
        self.phone_number = phone_number
        self.username = username
        self.dob = dob
        self.medical_history = medical_history
        self.insurance_info = insurance_info
        self.appointments = []
        self.admitted = False

    def admit(self):
        self.admitted = True

    def discharge(self):
        self.admitted = False

    def schedule_appointment(self, appointment):
        self.appointments.append(appointment)


class Appointment:
    def __init__(self, patient, doctor, date_time):
        self.patient = patient
        self.doctor = doctor
        self.date_time = date_time


# Example usage
patient1 = Patient(
    patient_id="P001",
    name="John Doe",
    address="123 Main St, City",
    phone_number="123-456-7890",
    username="john_doe",
    dob="1980-01-15",
    medical_history="Hypertension",
    insurance_info="ABC Insurance"
)

doctor1 = "Dr. Smith"
appointment1 = Appointment(patient1, doctor1, "2023-08-10 10:00 AM")

patient1.schedule_appointment(appointment1)
print(patient1.name, "has an appointment with", appointment1.doctor, "on", appointment1.date_time)
