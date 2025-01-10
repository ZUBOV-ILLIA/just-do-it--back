import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.router.js";

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
