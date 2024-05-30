import { Router } from "express";
import {
    getBroths,
    getProteins,
    placeOrder,
} from "../controllers/ramenController";

const router = Router();

router.get("/broths", getBroths);
router.get("/proteins", getProteins);
router.post("/orders", placeOrder);

export default router;
