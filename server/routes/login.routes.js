import { Router } from "express";
const router = Router();
// Controller
import { register, login } from "../controllers/auth.controllers.js";

router.post("/register", register);
router.post("/login", login);

export default router;
