const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const users = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
};

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.json({ name: user.name, age: user.age });
});

app.post("/user", (req, res) => {
  const { userId, name, age } = req.body;
  users[userId] = { name, age };
  res.status(201).json({ message: "User created", user: users[userId] });
});

app.patch("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const age = req.query.age;
  users[id].age = age;
  res.json({ message: "User updated", user: users[id] });
});

app.listen(port, () => {
  console.log('Server running at http://localhost:${port}');
});