import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

// Routes
import postsRoutes from "./routes/posts.routes.js";

//variables

const app = express();

// middlwares
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(postsRoutes);

//Static files

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//
export default app;
