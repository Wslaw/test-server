import express from "express";

import { contacts } from "./contacts.js";
const app = express();

app.get('/', (req, res) => {
     console.log(req.url);
     console.log(req.method);
    res.send('<h2>Home page</h2>')
})

app.get('/contacts', (req, res) => {
    
    // res.send(null)
    // res.json(null)
    // res.send(contacts)
    res.json(contacts)
})

app.listen(3001,()=>console.log("--Serveris running--"))