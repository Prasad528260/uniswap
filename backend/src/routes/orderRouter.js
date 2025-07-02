import express from 'express'
import { userAuth } from '../middlewares/userAuth.js';
import { getOrders, getCompletedOrders,completeOrder } from '../controllers/orderController.js';
const orderRouter= express.Router();

// * Get Pending orders of seller
orderRouter.get('/pending',userAuth,getOrders)

// * Get Completed orders of seller
orderRouter.get('/completed',userAuth,getCompletedOrders)

// * complete order
orderRouter.put('/complete/:orderId',userAuth,completeOrder)

export default orderRouter;
