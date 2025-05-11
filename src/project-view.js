
export function addProjectViewContent (project) {   
    const header = document.getElementById("header");
    const pageTitle = document.createElement("h3");
    pageTitle.textContent = project.getTitle();
    header.appendChild(pageTitle);

    const mainArea = document.getElementById("main-area");
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

export function buildList(taskList) {
    const listDiv = document.createElement('div');
    listDiv.style.borderStyle = "solid";
    listDiv.style.borderRadius = "8px";
    listDiv.style.width = "18em";
    listDiv.style.padding = ".5em";
    const title = document.createElement('H3');
    title.textContent = taskList.getTitle();
    listDiv.appendChild(title);
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