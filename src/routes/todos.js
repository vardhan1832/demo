"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'posted', todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text
        };
        return res.status(201).json({ message: 'success', todos: todos });
    }
    res.status(400).json({ message: 'cannot find the todo with the id ' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoitem => todoitem.id !== req.params.todoId);
    res.status(200).json({ message: 'deleted', todos: todos });
});
exports.default = router;
