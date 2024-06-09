import express from "express";
import { addTaskGroup } from "../controller/taskGroup.js";

const router = express.Router();

router.post("/add", addTaskGroup)

export default router