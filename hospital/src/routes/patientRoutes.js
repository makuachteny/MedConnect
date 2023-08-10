import express from "express";
import {
  addPatient,
  findAllPatients,
  findOnePatient,
  updatePatient,
  deletePatient,
} from "../controller/patientController";
import { checkIsEmpty, checkPatientExist } from "../validations/patientCheck";

const router = express.Router();

router.post("/patient", checkIsEmpty, checkPatientExist, addPatient);
router.get("/patient", findAllPatients);
router.get("/patient/:patientId", findOnePatient);
router.patch("/patient/:patientId", checkIsEmpty, updatePatient);
router.delete("/patient/:patientId", deletePatient);

export default router;
