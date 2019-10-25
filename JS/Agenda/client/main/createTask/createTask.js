import { createNewTask } from '../actions/task';

(function () {
    const createTask = document.getElementById('createUserTask');

    createTask.onsubmit = (event) => {
        event.preventDefault();
        const { title, description, gitLink } = event.target;

        createNewTask(title.value, description.value, gitLink.value)
            .then(task => {
                console.log(task.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
})()
