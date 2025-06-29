import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://prasadsubhedar5460:udSAptIBTdKayWCT@uniswap.hp0oihx.mongodb.net/uniswap");
};
export default connectDB;