/*// src/database/index.js
import mongoose from "mongoose";

const connectionUrl = "mongodb+srv://sakethsampath2006:79BYgwy2ttLYaq0H@cluster0.jivdt.mongodb.net/blog-app";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(connectionUrl, opts)
      .then((mongoose) => {
        console.log("✅ New MongoDB Connection Established");
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
};

export default connectToDB; */



import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://sakethsampath2006:79BYgwy2ttLYaq0H@cluster0.jivdt.mongodb.net/";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Blog Databse Connection is Successful"))
    .catch((error) => console.log(error));
};

export default connectToDB;