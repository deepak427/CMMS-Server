import express from "express";
import { addLabourTask, addTask, getAllTasks } from "../controller/task.js";

const router = express.Router();

router.post('/add', addTask)
router.get("/get", getAllTasks)
router.post("/addTask", addLabourTask)

export default router