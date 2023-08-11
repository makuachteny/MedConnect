import model from "../database/models";

const Appointment = model.Appointment;

const createAppointment = async (data) => {
  const {
    Appointment_Date,
    Appointment_Time,
    Patient_ID,
    Doctor_ID,
    Clinic_Number,
  } = data;

  const appoint = await Appointment.create({
    Appointment_Date,
    Appointment_Time,
    Patient_ID,
    Doctor_ID,
    Clinic_Number,
  });
  return { data: appoint };
};

const getAppointmentById = async (id) => {
  const oneAppointment = await Appointment.findOne({
    where: {
      AppointmentId: id,
    },
  });
  if (!oneAppointment) {
    return false;
  }
  return { data: oneAppointment };
};

const updateAppointmentById = async (data, id) => {
  const {
    Appointment_Date,
    Appointment_Time,
    Patient_ID,
    Doctor_ID,
    Clinic_Number,
  } = data;
  const appointFound = await Appointment.findOne({
    where: { AppointmentId: id },
  });
  if (!appointFound) {
    return { message404: " Appointment is not found" };
  } else {
    await appointFound.update({
        Appointment_Date,
        Appointment_Time,
        Patient_ID,
        Doctor_ID,
        Clinic_Number,
    });
    return { data: appointFound };
  }
};

const deleteAppointmentById = async (id) => {
  const oneAppointment = await Appointment.findOne({
    where: {
      AppointmentId: id,
    },
  });
  if (!oneAppointment) {
    return false;
  } else {
    await Appointment.destroy({
      where: { AppointmentId: id },
    });
    return { data: "Appointment is deleted successfully" };
  }
};

export { createAppointment, getAppointmentById, updateAppointmentById, deleteAppointmentById };
