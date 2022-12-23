import express from "express";
import fileUpload from "express-fileupload";

// Routes
import postsRoutes from "./routes/posts.routes.js";

//variables
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "../client/build"));

// middlwares
app.use(express.static(join(__dirname, "../client/build")));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(postsRoutes);
console.log(join(__dirname, "../client/build"));

//Static files

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//
export default app;
