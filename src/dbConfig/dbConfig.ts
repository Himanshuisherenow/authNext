import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.DB_CONN_STRING!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB successfully Connected.");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error.Please make sure MongoDB is running. " + err
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
