import mongoose from "mongoose";
let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (!connected) {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      connected = true;
      console.log("MongoDB connected");
    } catch (error) {
      console.log("MongoDB connection error:", error);
    }
  } else {
    console.log("MongoDB already connected");
  }
};
