import { v4 as uuidv4 } from "uuid";
import db from "../utils/db.js";

const getAll = async () => {
  try {
    const [todos] = await db.query("SELECT * FROM todos");

    return todos;
  } catch (error) {
    console.error(error);
  }
};

const getOne = async (id) => {
  try {
    const [todo] = await db.query(
      `
        SELECT * FROM todos
        WHERE id = '${id}'
      `
    );

    return todo[0];
  } catch (error) {
    console.error(error);
  }
};

const create = async (title) => {
  try {
    const id = uuidv4();

    await db.query(
      `
        INSERT INTO todos (id, title)
        VALUES ('${id}', '${title}')
      `
    );

    return id;
  } catch (error) {
    console.error(error);
  }
};

const update = async (id, { title, completed }) => {
  try {
    await db.query(
      `
        UPDATE todos
        SET title = '${title}', completed = '${completed}'
        WHERE id = '${id}'
      `
    );
  } catch (error) {
    console.error(error);
  }
};

const remove = async (id) => {
  try {
    await db.query(
      `
        DELETE FROM todos
        WHERE id = '${id}'
      `
    );
  } catch (error) {
    console.error(error);
  }
};

export const todoService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
