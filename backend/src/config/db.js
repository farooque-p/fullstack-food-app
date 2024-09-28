import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(`MongoDB Connect at: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error! ", error);
    process.exit(1);
  }
};

export default connectDatabase;
