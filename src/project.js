export function createProject() {
    let title = "";
    let projectArray = [];
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
    };
}