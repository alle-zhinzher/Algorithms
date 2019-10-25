const Task = require('../models/Task');


const getUserTasks = (userID) => Task.find({ userID }).sort({ date: -1 });

const getTasksCount = (userID) => Task.find({ userID }).count();

const getAllTasks = () => Task.find().sort({ date: -1 });

const createTask = (
    title,
    description,
    userID,
    gitLink) => new Task({ title, description, gitLink, userID }).save();

const updateTask = (id, title) => Task.findByIdAndUpdate(id, { title });

const deleteTask = (id) => Task.findByIdAndDelete(id);


module.exports = {
    getUserTasks,
    getTasksCount,
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
}