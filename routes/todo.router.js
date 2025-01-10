import express from "express";
import { todoController } from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.get("/", todoController.getAll);
todoRouter.post("/", todoController.create);
todoRouter.patch("/:id", todoController.update);
todoRouter.delete("/:id", todoController.remove);

export default todoRouter;
