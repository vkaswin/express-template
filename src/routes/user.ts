import { Router } from "express";
import { getAllUsers } from "../controllers/user";

const router = Router();

router.get("/all", getAllUsers);

export default router;
