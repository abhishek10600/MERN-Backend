import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.DB_URI, {
            dbName: "backendApi",
        })
        .then(() => console.log("Database connected successfully!"))
        .catch((e) => console.log(e))
}
