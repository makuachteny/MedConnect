import express from "express";
import cors from "cors";
import router from "./routes/patientRoutes";
import routerappointment from "./routes/appointmentRoutes";
import swaggerUI from "swagger-ui-express";
import swagger from "./docConfig/swagger";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    message: "Welcome to Hospital Management Service API",
  });
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swagger));
app.use("/api/v1/", router)
app.use("/api/v1/", routerappointment)

export default app;
