import express from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import { docsHandler, errorHandler, notFoundHandler } from "./middleware";

export const app = express();

// Middleware
app.use(express.urlencoded());
app.use(express.json());

// Routes
app.use("/docs", swaggerUi.serve, docsHandler);
RegisterRoutes(app);

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);
