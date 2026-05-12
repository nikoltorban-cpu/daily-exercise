const express = require("express");

const router = express.Router();


// IN-MEMORY DATABASE

const todos = [];


// GET ALL TODOS

router.get("/", (req, res) => {

  res.json(todos);

});


// CREATE TODO

router.post("/", (req, res) => {

  const { text } = req.body;

  if (!text) {

    return res.status(400).json({

      message:
        "Todo text is required"

    });

  }

  const newTodo = {

    id: Date.now(),

    text,

    completed: false

  };

  todos.push(newTodo);

  res.status(201).json(newTodo);

});


// UPDATE TODO

router.put("/:id", (req, res) => {

  const id =
    parseInt(req.params.id);

  const todo = todos.find(
    todo => todo.id === id
  );

  if (!todo) {

    return res.status(404).json({

      message: "Todo not found"

    });

  }

  const {

    text,
    completed

  } = req.body;

  if (text !== undefined) {

    todo.text = text;

  }

  if (completed !== undefined) {

    todo.completed = completed;

  }

  res.json(todo);

});


// DELETE TODO

router.delete("/:id", (req, res) => {

  const id =
    parseInt(req.params.id);

  const todoIndex =
    todos.findIndex(
      todo => todo.id === id
    );

  if (todoIndex === -1) {

    return res.status(404).json({

      message: "Todo not found"

    });

  }

  todos.splice(todoIndex, 1);

  res.json({

    message:
      "Todo deleted successfully"

  });

});


module.exports = router;