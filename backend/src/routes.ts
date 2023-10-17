import { Router } from "express";

// Middleware
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

export { router };