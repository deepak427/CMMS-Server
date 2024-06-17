import express from "express";

import { addAsset, getAllAssets, updateAsset } from "../controller/asset.js";
import { setImage } from "../controller/updateAssetExtra.js"

const router = express.Router();

router.post('/add', addAsset)
router.get('/get', getAllAssets)
router.post('/update', updateAsset)

router.post('/setImage', setImage)

export default router