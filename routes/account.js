import express from "express";
import { addAccount, getAllAccounts } from "../controller/account.js";
import { addLocatedAt, getAllLocatedAt } from "../controller/locatedAt.js";

const router = express.Router();

router.post('/add', addAccount)
router.get("/get", getAllAccounts)

router.post('/addLocatedAt', addLocatedAt)
router.get("/getLocatedAt", getAllLocatedAt)

export default router