import express from 'express'
import bodyParser from 'body-parser'
import routerTodos from './routes/todos'
const app = express()
app.use(bodyParser.json())
app.use(routerTodos)
app.listen(3000)