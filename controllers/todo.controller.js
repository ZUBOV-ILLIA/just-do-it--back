import { todoService } from "../services/todo.service.js";

const getAll = async (req, res) => {
  try {
    const todos = await todoService.getAll();

    if (!todos) {
      return res.status(500).send("Something went wrong");
    }

    res.send(todos);
  } catch (error) {
    console.error(error);
  }
};

const create = async (req, res) => {
  try {
    if (!req.body.title.trim()) {
      return res.status(400).send("Title is required");
    }

    const createdTodoId = await todoService.create(req.body.title);
    const todo = await todoService.getOne(createdTodoId);

    res.send(todo);
  } catch (error) {
    console.error(error);
  }
};

const update = async (req, res) => {
  try {
    const errors = [];

    if (!req.body.title) {
      errors.push("Title is required");
    }

    if (!req.body.hasOwnProperty("completed")) {
      errors.push("Completed is required");
    }

    if (errors.length) {
      return res.status(400).send(errors);
    }

    await todoService.update(req.params.id, req.body);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const remove = async (req, res) => {
  try {
    await todoService.remove(req.params.id);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

export const todoController = {
  getAll,
  create,
  update,
  remove,
};
