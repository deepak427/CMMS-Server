import express from "express";

import { addPart, deletePart, getAllParts, updatePart } from "../controller/part.js";
import { setImagePart, updateStockPart } from "../controller/updateAssetExtra.js"

const router = express.Router();

router.post('/add', addPart)
router.get('/get', getAllParts)
router.post('/update', updatePart)
router.post('/updateStock', updateStockPart)
router.post('/delete', deletePart)

router.post('/setImage', setImagePart)

export default router