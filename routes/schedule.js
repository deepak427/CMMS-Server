import express from "express";

import { addSchedule, getAllSchedules, setSchedule, updateSchedule } from "../controller/schedule.js";
import { addProject, getAllProjects } from '../controller/projects.js'

const router = express.Router();

router.post('/setSchedule', setSchedule)
router.post('/addSchedule', addSchedule)
router.get('/get', getAllSchedules)
router.post('/update', updateSchedule)
router.get('/getprojects', getAllProjects)
router.post('/addproject', addProject)

export default router;