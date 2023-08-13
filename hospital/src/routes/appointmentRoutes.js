import express from "express";
import {
  addAppointment,
  findAllAppointments,
  findOneAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controller/appointmentController";
import { checkIsEmpty, checkAppointmentExist } from "../validations/AppointmentCheck";

const router = express.Router();

router.post("/Appointment", checkIsEmpty, addAppointment);
router.get("/appointment", findAllAppointments);
router.get("/appointment/:AppointmentId", findOneAppointment);
router.patch("/appointment/:AppointmentId", checkAppointmentExist, updateAppointment);
router.delete("/appointment/:AppointmentId", deleteAppointment);

export default router;
