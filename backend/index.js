import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname2, "../frontend/.env.local") });
import connectDataBase from "./config/database.js";
import cors from "cors";
import blogRoutes from "./routes/apiRouter.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import categoryRouter from "./routes/categoryRouter.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import compression from "compression";

connectDataBase();

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json({ limit: "1500kb" }));

app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/categories", categoryRouter);
app.use("/", blogRoutes);

app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;

app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${Port}`)
);
