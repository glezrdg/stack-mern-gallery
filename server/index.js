import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import app from "./app.js";

// Db
connectDB();

app.listen(PORT);
console.log("server is running in port", PORT);
