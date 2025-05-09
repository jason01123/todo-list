export function buildList(taskList) {
    const listDiv = document.createElement('div');
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