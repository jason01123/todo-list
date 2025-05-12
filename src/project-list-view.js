import { addProjectViewContent } from "./project-view.js"

export function addProjectListViewContent(projectList) {
    const header = document.getElementById("header");
    const pageTitle = document.createElement("h3");
    pageTitle.textContent = projectList.getTitle();
    header.appendChild(pageTitle);

    const mainArea = document.getElementById("main-area");
    const gridDiv = document.createElement("div");
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
    const titleDiv = document.createElement('div');
    titleDiv.style.borderStyle = "solid";    
    titleDiv.style.borderRadius = "8px";
    titleDiv.style.width = "18em";
    titleDiv.style.padding = ".5em";
    const title = document.createElement('h3');
    title.textContent = project.getTitle();
    titleDiv.appendChild(title);
    titleDiv.addEventListener("click", () => displayProject(project));
    return titleDiv;
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
    contentDiv.innerHTML = "";
}