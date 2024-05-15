import express from "express";

import { addSchedule, getAllSchedules, setSchedule } from "../controller/schedule.js";

const router = express.Router();

router.post('/setSchedule', setSchedule)
router.post('/addSchedule', addSchedule)
router.get('/get', getAllSchedules)

export default router