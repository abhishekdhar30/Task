const mongoose=require("mongoose");

//connection to mongodb atlas
const connectDB =() => {
  try {
    const db = process.env.MONGODBURL;
    const conn = mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASSWORD}@cluster0.rfaz9.mongodb.net/ecommerce`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Success");
  } catch (error) {
    console.log("Failed ", error);
  }
};

module.exports = connectDB;

