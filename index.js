import express from "express";
import cors from "cors";

import db from "./utils/db.js";

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
