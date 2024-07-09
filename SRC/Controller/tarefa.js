import { openDB } from './configDB.js';

export async function createTable(){
    openDB().then(db=>{
            db.exec('CREATE TABLE IF NOT EXIST tarefa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}