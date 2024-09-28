import express from 'express'
import { sendMessage,getMessage } from '../controllers/message.controllers.js';
import protectRoute from '../middleware/protectRoute.js';

const router=express.Router();

router.get("/:Id",protectRoute,getMessage)
router.post("/send/:Id",protectRoute,sendMessage)


export default router;