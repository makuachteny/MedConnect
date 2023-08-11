import {
    createAppointment,
    getAppointmentById,
    updateAppointmentById,
    deleteAppointmentById,
  } from "../services/appointmentServices";
  import model from "../database/models";
  
  const Appointment = model.Appointment;
  
  const addAppointment = async (req, res) => {
    try {
      const { data, message } = await createAppointment(req.body);
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
  
  const findAllAppointments = async (req, res) => {
    try {
      const allAppointments = await Appointment.findAll();
      return res.status(200).json({
        status: "success",
        data: allAppointments,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  };
  
  const findOneAppointment = async (req, res) => {
    try {
      const id = req.params.Id;
      const { data } = await getAppointmentById(id);
      if (data) {
        return res.status(200).json({
          status: "success",
          data,
        });
      } else {
        return res.status(404).json({
          status: "fail",
          message: "Appointment is not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  };
  
  const updateAppointment = async (req, res) => {
    try {
      const id = req.params.allAppointmentId;
      const { data, message404 } = await updateAppointmentById(req.body, id);
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
  
  const deleteAppointment = async (req, res) => {
    try {
      const id = req.params.AppointmentId;
      const { data } = await deleteAppointmentById(id);
      if (data) {
        return res.status(200).json({
          status: "success",
          data,
        });
      } else {
        return res.status(404).json({
          status: "fail",
          message: "Appointment is not found",
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
    addAppointment,
    findAllAppointments,
    findOneAppointment,
    updateAppointment,
    deleteAppointment,
  };
  