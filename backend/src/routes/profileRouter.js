import express from 'express'
import { userAuth } from '../middlewares/userAuth.js';
import { updateProfile, getProfile } from '../controllers/profileController.js';
const profileRouter= express.Router();

// * Update Profile
profileRouter.put('/edit',userAuth,updateProfile)

// * Get Profile
profileRouter.get('/view',userAuth,getProfile)

export default profileRouter;