
import "./styles.css";
import 'milligram';
import {createTask} from './task.js';
import {createTaskList} from './task-list.js'
import {buildList} from './dom.js'




const taskList = createTaskList();
taskList.setTitle("Fun List");
const task1 = createTask();
const task2 = createTask();
task1.setTitle("Play golf with Jim");
task2.setTitle("Go kayaking with Jose");   
taskList.addTask(task1);
taskList.addTask(task2);

document.body.appendChild(buildList(taskList));