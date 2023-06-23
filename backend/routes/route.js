import express from 'express'
import { registerUsers } from '../controllers/userController.js'; 

export const router = express.Router();

router.post('/registerUser', registerUsers);