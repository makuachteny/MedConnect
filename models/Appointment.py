class Patient:
    def __init__(self, patient_id, name):
        self.patient_id = patient_id
        self.name = name


class Appointment:
    def __init__(self, patient, procedure_type, date_time):
        self.patient = patient
        self.procedure_type = procedure_type
        self.date_time = date_time


# Example usage
patient1 = Patient("P001", "John Doe")
appointment1 = Appointment(patient1, "Routine Checkup", "2023-08-15 10:00 AM")

print("Appointment Details:")
print("Patient:", appointment1.patient.name)
print("Procedure Type:", appointment1.procedure_type)
print("Date and Time:", appointment1.date_time)
