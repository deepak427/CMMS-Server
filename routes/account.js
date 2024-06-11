import express from "express";
import { addAccount, getAllAccounts } from "../controller/account.js";

const router = express.Router();

router.post('/add', addAccount)
router.get("/get", getAllAccounts)

export default router