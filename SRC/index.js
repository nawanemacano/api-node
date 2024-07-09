import openDB from './configDB.js';
import express from 'express';
import { createTable } from './controller/tarefa.js'

openDB();
const app = express();
index.use(express.json());

createTable();

index. get('/tasks', (req, res) =>{
    res.send("API RESTful rodando com node.js");

})

index.post('/tasks', (req, res) =>{
    console.log(req.body);
    res.json({
        "statuscode": 200
    })
})

index.put('/tasks', (req, res) =>{

})

index.listen(3000, ()=>console.log("API RODANDO"));

