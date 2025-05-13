import 'milligram';
import "./styles.css";

import { createTask } from './task.js';
import { createTaskList } from './task-list.js'
import { createProject } from './project.js';
import { createProjectList } from './project-list.js';
import { addProjectListViewContent} from './project-list-view.js'

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

const projectList = createProjectList();
const project1 = createProject(projectList);
project1.setTitle("My Project 1");
project1.addTaskList(taskListA);
project1.addTaskList(taskListB);
const project2 = createProject(projectList);
project2.setTitle("My Project 2");
project2.addTaskList(taskListA);
project2.addTaskList(taskListB);


projectList.setTitle("All Projects");
projectList.addProject(project1);
projectList.addProject(project2);
addProjectListViewContent(projectList);
//addProjectViewContent(project);