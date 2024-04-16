const express = require('express');
const router = express.Router();
const Task = require('../Models/task');


//Here getting all the tasks
router.get('/',async(req, res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);

    }
    catch(err){
        res.status(500).json({message: err.message});

    }
    res.task = task;
    next();

});

//To get a task 
router.get('/:id',getTask,(req, res)=>{
    res.json(res.task);
});

//Creating a task 
router.post('/',async(req,res)=>{
    const task = new Task({
        title:req.body.title,
        description: req.body.description,

    });
    try{
        const task = await Task.save();
        res.status(201),json(newTask);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

//Updating a task 
router.patch('/:id',getTask, async(req,res)=>{
    if(req.body.title != null){
        res.task.title = req.body.title;
    }
    if(req.body.description != null ){
        res.task.description = req.body.description;
    }
    try{
        const updatedTask = await res.Task.save();
        res.json(updatedTask);
    } catch(err){
        res.status(500).json({message: error.message});

    }
    
});

//Deleting a task
router.delete('/:id',getTask,async(req, res)=>{
    try {
        await res.task.remove();
        res.json({message: 'Task Deleted'});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getTask(req, res, next) {
    let task;
    try {
        task = await Task.findbyID(req.params.id);
        if(task==null){
            return res.status(400).json({message:'Task not found'});

        }
        
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = express.Router;


