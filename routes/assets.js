import express from "express";

import { addAsset, getAllAssets, updateAsset } from "../controller/asset.js";

const router = express.Router();

router.post('/add', addAsset)
router.get('/get', getAllAssets)
router.post('/update', updateAsset)

export default router