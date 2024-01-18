import express from "express";
import { getTrade, getUserTrade, likeTrade } from "../controllers/trades.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getTrade);
router.get("/:userId/trade", verifyToken, getUserTrade);


/* UPDATE */
router.patch("/:id/like", verifyToken, likeTrade);

export default router;