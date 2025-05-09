import "./styles.css";
import {createTask} from './task.js';
import {createTaskList} from './task-list.js'

function buildList(taskList) {
    const listDiv = document.createElement('div');
    const title = document.createElement('H3');
    title.textContent = taskList.getTitle();
    listDiv.appendChild(title);
    const ul = document.createElement('ul');
    const items = taskList.getTaskTitles();
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
    listDiv.appendChild(ul);
    return listDiv;
}

const taskList = createTaskList();
taskList.setTitle("Fun List");
const task1 = createTask();
const task2 = createTask();
task1.setTitle("Play golf with Jim");
task2.setTitle("Go kayaking with Jose");   
taskList.addTask(task1);
taskList.addTask(task2);

document.body.appendChild(buildList(taskList));