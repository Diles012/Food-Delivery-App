import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder, verifyOrder, userOrders, listOrders,updateOrderStatus } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware, placeOrder);
orderRouter.post("/verify",authMiddleware, verifyOrder);
orderRouter.post("/userOrders",authMiddleware,userOrders); 
orderRouter.get("/list",authMiddleware,listOrders);
orderRouter.post("/status",authMiddleware, updateOrderStatus);

export default orderRouter;