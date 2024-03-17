import express from "express";

import { contacts } from "./contacts.js";

import moment from "moment";

import fs from "fs/promises"
import cors from "cors";

import { router } from "./routes/api/contacts.js";

const app = express();

// ********************************
// const corsMiddleware = cors();
// app.use(corsMiddleware);
app.use(cors());
// middleware
/*
app.use((req, res, next) => {
    console.log("First middleware");
    next();
})
app.use((req, res, next) => {
    console.log("Second middleware");
    next();
})
*/
// ***************************************************************

app.use("/api/contacts", router)



// app.use(async(req, res, next) => {
//     const { method, url } = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//     await fs.appendFile("./server.log", `\n${method} ${url} ${date}`);
//     next();
// })
/*
app.get('/products', async (req, res) => {
    
    res.json([])
});

app.get('/contacts', async (req, res) => {
    
    // res.send(null)
    // res.json(null)
    // res.send(contacts)
    res.json(contacts)
});

app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    })
})
*/



app.listen(3001,()=>console.log("--Serveris running--"))