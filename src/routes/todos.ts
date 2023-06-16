import { Router } from "express";

import { todo } from '../models/todo'

type requestbody = { text : string }
type requestParams = { todoId: string}

const router = Router();
let todos:todo[] = []

router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos})
})
router.post('/todo',(req,res,next)=>{
    const body = req.body as requestbody
    const newTodo: todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo)
    res.status(201).json({message:'posted',todos: todos})
})
router.put('/todo/:todoId',(req,res,next)=>{
    const body = req.body as requestbody
    const params = req.params as requestParams
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem)=> todoItem.id === tid)
    if(todoIndex>=0){
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }
        return res.status(201).json({message: 'success', todos : todos})
    }
    res.status(400).json({message: 'cannot find the todo with the id '})
})
router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams
    todos = todos.filter(todoitem => todoitem.id !== params.todoId)
    res.status(200).json({message: 'deleted', todos: todos})
})
export default router;