import 'milligram';
import "./styles.css";

import { addProjectViewContent } from "./project-view.js"
import { createTask } from './task.js';
import { createTaskList } from './task-list.js'
import { createProject } from './project.js';

const task1a = createTask();
const task1b = createTask();
const task1c = createTask();
task1a.setTitle("Feed the animals");
task1b.setTitle("Water the garden");
task1c.setTitle("Clean the pool");
const taskListA = createTaskList();
taskListA.setTitle("Yard Work");
taskListA.addTask(task1a);
taskListA.addTask(task1b);
taskListA.addTask(task1c);
const taskListB = createTaskList(); 
taskListB.setTitle("More Work");
taskListB.addTask(task1a);
taskListB.addTask(task1b);
taskListB.addTask(task1c);
const project = createProject();
project.setTitle("My Project");
project.addTaskList(taskListA);
project.addTaskList(taskListB);


addProjectViewContent(project);