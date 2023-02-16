import express from "express";
import dotenv from "dotenv";
import cors from "./src/middleware/cors";
import connect from "./src/database/config";

dotenv.config();

const port = process.env.PORT;
const app = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
