import express from "express";
import { getAllAssetAttributes, changeDisplayStatus } from "../controller/assetAttributes.js";

const router = express.Router();

router.get('/get', getAllAssetAttributes)
router.post('/change', changeDisplayStatus)

export default router