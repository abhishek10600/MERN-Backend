import { app } from "./app.js";
import { connectDB } from "./database/database.js";

connectDB();
console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
    console.log("Server is working");
})
