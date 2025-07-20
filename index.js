const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());


app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  const task = await prisma.task.create({ data: { title } });
  res.json(task);
});


app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});


app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { completed }
  });
  res.json(task);
});


app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
