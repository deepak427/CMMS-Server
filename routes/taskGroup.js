import express from "express";
import { addTaskGroup, deleteTaskGroups } from "../controller/taskGroup.js";

const router = express.Router();

router.post("/add", addTaskGroup)
router.post("/delete", deleteTaskGroups)

export default router