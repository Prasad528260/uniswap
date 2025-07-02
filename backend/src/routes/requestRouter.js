import express from 'express'
import { userAuth } from '../middlewares/userAuth.js';
import { sendRequest, viewPendingRequest,acceptRequest } from '../controllers/requestController.js';
const requestRouter= express.Router();

// * Make a request
requestRouter.post('/send/:productId',userAuth,sendRequest)

// * Get Pending  requests
requestRouter.get('/view',userAuth,viewPendingRequest)

// * Accept Request and Create Order
requestRouter.put('/accept/:requestId',userAuth,acceptRequest)


export default requestRouter;