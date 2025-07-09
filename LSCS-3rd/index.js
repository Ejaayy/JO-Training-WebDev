import express from "express";
import connect_db from "./connectdb.js";
import Task from "./taskSchema.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect_db();

app.listen(3000, function(){
    console.log("Server is running on local port 3000...");
});

//localhost:3000/api
app.post("/api", async function(req, res){
    try{
        const task = await Task.create(req.body);

        res.status(201).send(task);
    }catch(error){
        res.status(500).send({error: error.message});
    }
});

app.get("/api", async function(req, res){
    try{
        const tasks = await Task.find({});

        res.status(200).send(tasks);

    }catch(error){
        res.status(500).send({error: error.message});
    }
});

app.get("/api/:id", async function(req, res){
    try{
        const id = req.params.id;
        const task = await Task.findById(id);

        res.status(200).json(task);
    }catch(error){
        res.status(500).send({error: error.message});
    }
});

app.put("/api/:id", async function(req, res){
    try{
        const id = req.params.id;
        await Task.findByIdAndUpdate(id, req.body);
        const task = await Task.findById(id);

        res.status(200).json(task);
    }catch(error){
        res.status(500).send({error: error.message});
    }
});

app.delete("/api/:id", async function(req, res){
    try{
        const id = req.params.id;
        await Task.findByIdAndDelete(id);

        res.status(200).json({ message: "Your task was deleted"});
    }catch(error){
        res.status(500).send({error: error.message});
    }
});

app.get('/', function(req, res){
    res.send('Hello World!');
});