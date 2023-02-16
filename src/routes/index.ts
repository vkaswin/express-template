import { Router } from "express";
import userRoutes from "../routes/user";

const router = Router();

router.use("/api/user", userRoutes);

export default router;
