import express from "express";

import { getAllWorkOrder } from "../controller/workOrder.js";

const router = express.Router();

router.get('/get', getAllWorkOrder)

export default router