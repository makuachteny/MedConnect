import model from "../database/models";

const Patient = model.Patient;

export const checkPatientExist = async (req, res, next) => {
  try {
    const patExist = await Patient.findOne({
      where: { patientName: req.body.patientName },
    });
    if (patExist)
      return res.status(400).json({
        status: "fail",
        message: "Patient name already registered",
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
      req.body.patientName === "" ||
      req.body.patientPNumber === "" ||
      req.body.dob === "" ||
      req.body.gender === "" ||
      req.body.patientLocation === "" ||
      req.body.doctorId === ""
      
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
