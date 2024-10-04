require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

const users = [];

app.get("/user", (req, res) => {
  res.json({
    users: users,
  });
});

app.post("/user", (req, res) => {
  users.push(req.body);

  res.json({
    user: req.body,
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);

  res.json({
    user: user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
