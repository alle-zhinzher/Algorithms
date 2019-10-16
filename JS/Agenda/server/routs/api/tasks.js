let express = require('express');
const auth = require('../middleware/auth');
const task = require('../../database/dao/task');

let router = express.Router();

// @route   GET api/task
// @desc    Get User Tasks
// @access  Private
router.get('/', (req, res) => {
    const { userID } = req.body
    console.log(req.body)
    task.getUserTasks(userID)
        .then(tasks => res.json(tasks));
});

// @route   GET api/task/all
// @desc    Get All Tasks
// @access  Public
router.get('/all', (req, res) => {
    task.getAllTasks()
        .then(tasks => res.json(tasks));
});

// @route   GET api/task/count
// @desc    Get Count of user task
// @access  Public
router.get('/count', (req, res) => {
    const { userID } = req.body
    task.getTasksCount(userID)
        .then(tasks => res.json(tasks));
});

// @route   POST api/task
// @desc    Create a Task
// @access  Private
router.post('/', (req, res) => {
    const { title, description, userID } = req.body;
    task.createTask(title, description, userID)
        .then(item => res.json(item));
});

// @route   PUT api/task/:id
// @desc    Update a Task
// @access  Private
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title } = req.body
    task.updateTask(id, title)
        .then(task => res.json(task));
});

// @route   DELETE api/task/:id
// @desc    Delete a Task
// @access  Private
router.delete('/:id', (req, res) => {
    const { id } = req.params
    items.deleteTask(id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
});


module.exports = router;