import mongoose from "mongoose";
import Book from "../models/book.js";
import User from "../models/user.js";
import Request from "../models/request.js";
import Order from "../models/order.js";

// * Send Request to Seller
export const sendRequest = async (req, res, next) => {
  try {
    const reciever = req.user;
    if (!reciever) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    const productId = req.params.productId;
    // console.log(productId);
    const objctProductId = new mongoose.Types.ObjectId(productId);
    if (!mongoose.Types.ObjectId.isValid(objctProductId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }
    const product = await Book.findById(objctProductId);
    if (!product) {
      console.log("ERROR : PRODUCT NOT FOUND");
      return res.status(400).json({ message: "Product Not Found" });
    }
    const seller = await User.findById(product.sellerId);
    if (!seller) {
      console.log("ERROR : SELLER NOT FOUND");
      return res.status(400).json({ message: "Seller Not Found" });
    }
    let request = new Request({
      recieverId: reciever._id,
      sellerId: seller._id,
      productId: product._id,
      status: "pending",
      location: "library",
      time: " 1:00 pm",
    });
    request = await request.save();
    res.status(200).json(request);
  } catch (error) {
    console.log("ERROR : SEND REQUEST FAILED", error.message);
    res.status(400).json({ message: "Send Request Failed" });
  }
};

// * View Pending Requests of Seller
export const viewPendingRequest = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    const pendingRequest = await Request.find({
      sellerId: user._id,
      status: "pending",
    }).populate(
      "recieverId",
      "firstName lastName _id department profilePicture"
    )
    .populate(
      "productId",
      "title author _id bookImg"
    );
    if (!pendingRequest) {
      console.log("ERROR : PENDING REQUEST NOT FOUND");
      return res.status(400).json({ message: "Pending Request Not Found" });
    }
    res.status(200).json(pendingRequest);
  } catch (error) {
    console.log("ERROR : VIEW PENDING REQUEST FAILED", error.message);
    res.status(400).json({ message: "View Pending Request Failed" });
  }
};

// * Accept Request and Create Order
export const acceptRequest = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    const requestId = req.params.requestId;
    const objctRequestId = new mongoose.Types.ObjectId(requestId);
    // console.log(objctRequestId);

    if (!mongoose.Types.ObjectId.isValid(objctRequestId)) {
      return res.status(400).json({ message: "Invalid Request ID" });
    }
    const request = await Request.findOneAndUpdate(
      { _id: objctRequestId, sellerId: user._id, status: "pending" },
      { status: "accepted" },
      { new: true }
    );
    if (!request) {
      console.log("ERROR : REQUEST NOT FOUND");
      return res.status(400).json({ message: "Request Not Found" });
    }

    let order = new Order({
      sellerId: user._id,
      recieverId: request.recieverId,
      productId: request.productId,
      status: "pending",
      location: "library",
      time: "1:00 pm",
    });
    order = await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.log("ERROR : ACCEPT REQUEST FAILED", error.message);
    res.status(400).json({ message: "Accept Request Failed" });
  }
};


