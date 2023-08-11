import model from "../database/models";

const Appointment = model.Appointment;

export const checkAppointmentExist = async (req, res, next) => {
  try {
    const appointExist = await Appointment.findOne({
      where: { AppointmentId: req.body.AppointmentId },
    });
    if (appointExist)
      return res.status(400).json({
        status: "fail",
        message: "Appointment name already registered",
      });
    next();
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

export const checkIsEmpty = async (req, res, next) => {
  try {
    if (
      req.body.Appointment_Date === "" ||
      req.body.Appointment_Time === "" ||
      req.body.Patient_ID === "" ||
      req.body.Doctor_ID === "" ||
      req.body.Clinic_Number === "" 
      
    )
      return res.status(400).json({
        status: "fail",
        message: "Please provide all fields",
      });
    next();
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
