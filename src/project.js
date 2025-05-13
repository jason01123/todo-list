export function createProject(projectList = null) {
    let title = "";
    let projectArray = [];
    let parentProjectList = projectList;
    return {
        getTitle() {
            return title;
        },
        setTitle(newTitle) {
            title = newTitle;
        },
        addTaskList(newTaskList) {
            projectArray.push(newTaskList);
        },
        getListArray() {
            return projectArray;
        },
        getProjectList() {
            return parentProjectList;
        }
    };
}