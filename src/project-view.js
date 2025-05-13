import { addProjectListViewContent } from "./project-list-view";

export function addProjectViewContent (project) {  

    const pageTitle = document.createElement("h3");
    const infoBar = document.getElementById("info-bar");
    const mainArea = document.getElementById("main-area");
    const allProjects = document.createElement("div");
    allProjects.id = "allProjectsBtn";

    pageTitle.textContent = project.getTitle();
    allProjects.textContent = "Back to Projects";   
    
    infoBar.appendChild(pageTitle);
    infoBar.appendChild(allProjects);
    allProjects.addEventListener("click", () => displayProjectList(project));
    
    const gridDiv = document.createElement("div");
    gridDiv.style.display = "grid";
    gridDiv.style.gridTemplateColumns = "repeat(auto-fit, 18em)";
    gridDiv.style.rowGap = "1em";
    gridDiv.style.columnGap = "1em";
    gridDiv.style.justifyContent = "center";
    for (const taskList of project.getListArray()) {
        gridDiv.appendChild(buildList(taskList));
    }
    mainArea.appendChild(gridDiv);
}

function buildList(taskList) {
    const listDiv = document.createElement('div');
    listDiv.id = "listDiv";
    listDiv.style.borderStyle = "solid";
    listDiv.style.borderRadius = "8px";
    listDiv.style.width = "18em";
    listDiv.style.padding = ".5em";
    listDiv.style.position = "relative";
    const title = document.createElement('H3')
    const delDiv = document.createElement('div');
    delDiv.id = "del-div";
    delDiv.textContent = "-";
    listDiv.appendChild(delDiv);
    title.textContent = taskList.getTitle();
    listDiv.appendChild(title);

    ;
    const ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    const items = taskList.getTaskTitles();
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
    listDiv.appendChild(ul);
    return listDiv;
}

function displayProjectList(project){
    clearContent();
    addProjectListViewContent(project.getProjectList());
}

function clearContent(){
    const contentDiv = document.getElementById('main-area');
    const infoBar = document.getElementById("info-bar");
    contentDiv.innerHTML = "";
    infoBar.innerHTML  ="";
}