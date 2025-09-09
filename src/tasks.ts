import { Task } from "./types";
import { randomUUID } from "crypto";

let tasks: Task[] = [];

// Funções de manipulação
export const createTask = (title: string, description: string): Task => {
  const now = new Date();
  const task: Task = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: now,
    updated_at: now,
  };
  tasks.push(task);
  return task;
};

export const listTasks = (filter?: string): Task[] => {
  if (!filter) return tasks;
  const lower = filter.toLowerCase();
  return tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(lower) ||
      t.description.toLowerCase().includes(lower)
  );
};

export const findTask = (id: string): Task | undefined =>
  tasks.find((t) => t.id === id);

export const updateTask = (
  id: string,
  data: { title?: string; description?: string }
): Task | null => {
  const task = findTask(id);
  if (!task) return null;

  if (data.title) task.title = data.title;
  if (data.description) task.description = data.description;
  task.updated_at = new Date();
  return task;
};

export const deleteTask = (id: string): boolean => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

export const toggleComplete = (id: string): Task | null => {
  const task = findTask(id);
  if (!task) return null;

  if (task.completed_at) {
    task.completed_at = null; // Desmarca
  } else {
    task.completed_at = new Date(); // Marca como concluída
  }
  task.updated_at = new Date();
  return task;
};
