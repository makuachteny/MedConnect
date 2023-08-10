import model from "../database/models";

const Patient = model.Patient;

const createPatient = async (data) => {
  const {
    patientName,
    patientPNumber,
    dob,
    gender,
    patientLocation,
    doctorId,
  } = data;

  const pat = await Patient.create({
    patientName,
    patientPNumber,
    dob,
    gender,
    patientLocation,
    doctorId,
  });
  return { data: pat };
};

const getPatientById = async (id) => {
  const onePatient = await Patient.findOne({
    where: {
      patientId: id,
    },
  });
  if (!onePatient) {
    return false;
  }
  return { data: onePatient };
};

const updatePatientById = async (data, id) => {
  const {
    patientName,
    patientPNumber,
    dob,
    gender,
    patientLocation,
    doctorId,
  } = data;
  const patFound = await Patient.findOne({
    where: { patientId: id },
  });
  if (!patFound) {
    return { message404: "Patient is not found" };
  } else {
    await patFound.update({
      patientName,
      patientPNumber,
      dob,
      gender,
      patientLocation,
      doctorId,
    });
    return { data: patFound };
  }
};

const deletePatientById = async (id) => {
  const onePatient = await Patient.findOne({
    where: {
      patientId: id,
    },
  });
  if (!onePatient) {
    return false;
  } else {
    await Patient.destroy({
      where: { patientId: id },
    });
    return { data: "Patient is deleted successfully" };
  }
};

export { createPatient, getPatientById, updatePatientById, deletePatientById };
