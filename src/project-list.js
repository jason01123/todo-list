export function createProjectList() {
    let title = "";
    let projectListArray = [];
    return {
        getTitle() {
            return title;
        },
        setTitle(newTitle) {
            title = newTitle;
        },
        addProject(newTask) {
            projectListArray.push(newTask);
        },
        getProjectListArray() {
            return projectListArray;
        }
    };
}