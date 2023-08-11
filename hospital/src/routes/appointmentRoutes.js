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

router.post("/Appointment", checkIsEmpty, checkAppointmentExist, addAppointment);
router.get("/appointment", findAllAppointments);
router.get("/appointment/:appointmentId", findOneAppointment);
router.patch("/appointment/:appointmentId", checkIsEmpty, updateAppointment);
router.delete("/appointment/:appointmentId", deleteAppointment);

export default router;
