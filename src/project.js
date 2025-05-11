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
        addProject(newTask) {
            projectArray.push(newTask);
        },
        getListArray() {
            return projectArray;
        },
        getTaskTitles() {
            let titleList = [];
            for (const project of projectArray) {
                titleList.push(task.getTitle());
            }
            return titleList;
        }
    };
}