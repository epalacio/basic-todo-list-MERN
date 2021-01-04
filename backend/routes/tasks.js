const router = require('express').Router();
let Task = require('../models/task.model');

// Main Route
router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new task
router.route('/add').post((req, res) => {
    const task = req.body.task;

    const newTask = new Task({task});

    newTask.save()
        .then(() => res.json('New task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Find specific task by ID
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete specific task by ID
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(task => res.json('Task deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Find and update specific task by ID
router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.task = req.body.task

            task.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
