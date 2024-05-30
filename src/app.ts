import express from "express";
import ramenRoutes from "./routes/ramenRoutes";

const app = express();

app.use(express.json());
app.use("/api", ramenRoutes);
export default app;
