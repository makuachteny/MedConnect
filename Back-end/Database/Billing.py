class Invoice:
    def __init__(self, patient, services, total_amount):
        self.patient = patient
        self.services = services
        self.total_amount = total_amount
        self.paid = False

    def make_payment(self):
        self.paid = True


# Example usage
services = ["Consultation", "Medication"]
total_amount = 150.00
invoice1 = Invoice(patient1, services, total_amount)
invoice1.make_payment()

if invoice1.paid:
    print("Invoice for", patient1.name, "has been paid.")
