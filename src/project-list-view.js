import { addProjectViewContent } from "./project-view.js"

export function addProjectListViewContent(projectList) {
    const header = document.getElementById("header");
    const mainArea = document.getElementById("main-area");
    const pageTitle = document.createElement("h3");
    const gridDiv = document.createElement("div");
    const infoBar = document.getElementById("info-bar");
    
    pageTitle.textContent = projectList.getTitle();
    infoBar.appendChild(pageTitle);
    
    gridDiv.style.display = "grid";
    gridDiv.style.gridTemplateColumns = "repeat(auto-fit, 18em)";
    gridDiv.style.rowGap = "1em";
    gridDiv.style.columnGap = "1em";
    gridDiv.style.justifyContent = "center";
    for (const project of projectList.getProjectListArray()) {
        gridDiv.appendChild(buildProjectList(project));
    }
    mainArea.appendChild(gridDiv);   
}

function buildProjectList(project) {
    const projectDiv = document.createElement('div');
    projectDiv.id = "project-div";
    projectDiv.style.borderStyle = "solid";    
    projectDiv.style.borderRadius = "8px";
    projectDiv.style.width = "18em";
    projectDiv.style.padding = ".5em";
    const title = document.createElement('h3');
    title.textContent = project.getTitle();
    projectDiv.appendChild(title);
    projectDiv.addEventListener("click", () => displayProject(project));
    return projectDiv;
}

function displayProject(project){
    //clearContent();
    //addMenuContent();
    console.log("project clicked:" + project.getTitle());
    clearContent();
    addProjectViewContent(project);
}

function clearContent(){
    const contentDiv = document.getElementById('main-area');
    const infoBar = document.getElementById("info-bar");
    contentDiv.innerHTML = "";
    infoBar.innerHTML  ="";
}