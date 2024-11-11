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