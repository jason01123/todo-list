export function createTaskList() {
    let title = "";
    let taskListArray = [];
    return {
        getTitle() {
            return title;
        },
        setTitle(newTitle) {
            title = newTitle;
        },
        addTask(newTask) {
            taskListArray.push(newTask);
        },
        getListArray() {
            return taskListArray;
        },
        getTaskTitles() {
            let titleList = [];
            for (const task of taskListArray) {
                titleList.push(task.getTitle());
            }
            return titleList;
        }
    };
}