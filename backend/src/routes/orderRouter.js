import express from 'express'
import { userAuth } from '../middlewares/userAuth.js';
import { getOrders, getCompletedOrders,completeOrder ,getRecieverOrders,getRecieverCompletedOrders} from '../controllers/orderController.js';
const orderRouter= express.Router();

// * Get Pending orders of seller
orderRouter.get('/pending',userAuth,getOrders)

// * Get Completed orders of seller
orderRouter.get('/completed',userAuth,getCompletedOrders)

// * complete order
orderRouter.put('/complete/:orderId',userAuth,completeOrder)

// * Get Pending orders of reciever
orderRouter.get('/reciever/pending',userAuth,getRecieverOrders)

// * Get Completed orders of reciever
orderRouter.get('/reciever/completed',userAuth,getRecieverCompletedOrders)

export default orderRouter;
