import { Router } from "express";
import {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
  toggleComplete,
} from "./tasks";

const router = Router();

// Criar task
router.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title e description são obrigatórios" });
  }
  const task = createTask(title, description);
  res.status(201).json(task);
});

// Listar tasks (com filtro opcional por ?search=)
router.get("/tasks", (req, res) => {
  const search = req.query.search as string | undefined;
  const result = listTasks(search);
  res.json(result);
});

// Atualizar pelo id
router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title && !description) {
    return res.status(400).json({ message: "Deve enviar title ou description" });
  }

  const updated = updateTask(id, { title, description });
  if (!updated) return res.status(404).json({ message: "Task não encontrada" });

  res.json(updated);
});

// Deletar pelo id
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const deleted = deleteTask(id);
  if (!deleted) return res.status(404).json({ message: "Task não encontrada" });
  res.status(204).send();
});

// Marcar como completa/incompleta
router.patch("/tasks/:id/complete", (req, res) => {
  const { id } = req.params;
  const task = toggleComplete(id);
  if (!task) return res.status(404).json({ message: "Task não encontrada" });
  res.json(task);
});

export default router;
