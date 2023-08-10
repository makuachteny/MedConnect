import {
  createPatient,
  getPatientById,
  updatePatientById,
  deletePatientById,
} from "../services/patientServices";
import model from "../database/models";

const Patient = model.Patient;

const addPatient = async (req, res) => {
  try {
    const { data, message } = await createPatient(req.body);
    if (message) {
      return res.status(400).json({
        status: "fail",
        message,
      });
    }
    if (data) {
      return res.status(201).json({
        status: "success",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

const findAllPatients = async (req, res) => {
  try {
    const allPatients = await Patient.findAll();
    return res.status(200).json({
      status: "success",
      data: allPatients,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

const findOnePatient = async (req, res) => {
  try {
    const id = req.params.patientId;
    const { data } = await getPatientById(id);
    if (data) {
      return res.status(200).json({
        status: "success",
        data,
      });
    } else {
      return res.status(404).json({
        status: "fail",
        message: "Patient is not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

const updatePatient = async (req, res) => {
  try {
    const id = req.params.patientId;
    const { data, message404 } = await updatePatientById(req.body, id);
    if (data) {
      return res.status(200).json({
        status: "success",
        data,
      });
    }
    if (message404) {
      return res.status(404).json({
        status: "fail",
        message: message404,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

const deletePatient = async (req, res) => {
  try {
    const id = req.params.patientId;
    const { data } = await deletePatientById(id);
    if (data) {
      return res.status(200).json({
        status: "success",
        data,
      });
    } else {
      return res.status(404).json({
        status: "fail",
        message: "Patient is not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

export {
  addPatient,
  findAllPatients,
  findOnePatient,
  updatePatient,
  deletePatient,
};
