class MedicalRecord:
    def __init__(self, patient, diagnosis, treatment_plan, prescriptions):
        self.patient = patient
        self.diagnosis = diagnosis
        self.treatment_plan = treatment_plan
        self.prescriptions = prescriptions
        self.lab_results = []
        self.imaging_reports = []

    def add_lab_result(self, lab_result):
        self.lab_results.append(lab_result)

    def add_imaging_report(self, imaging_report):
        self.imaging_reports.append(imaging_report)


class LabResult:
    def __init__(self, test_name, result):
        self.test_name = test_name
        self.result = result


class ImagingReport:
    def __init__(self, image_type, report):
        self.image_type = image_type
        self.report = report


# Example usage
lab_result1 = LabResult("Blood Test", "Normal")
imaging_report1 = ImagingReport("X-ray", "No abnormalities detected")
record1 = MedicalRecord(patient1, "Hypertension", "Prescribed medication", ["Medication A"])
record1.add_lab_result(lab_result1)
record1.add_imaging_report(imaging_report1)
