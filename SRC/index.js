import openDB from './configDB.js';
import express from 'express';
import { createTable } from './controller/tarefa.js'

openDB();
const app = express();
app.use(express.json());

createTable();

app. get('/', (req, res) =>{
    res.send("API RESTful rodando com node.js");

})

app.post('/tarefa1', (req, res) =>{
    console.log(req.body);
    res.json({
        "statuscode": 200
    })
})

app.listen(3000, ()=>console.log("API RODANDO"));

