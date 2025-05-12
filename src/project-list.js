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
        addProject(newProject) {
            projectListArray.push(newProject);
        },
        getProjectListArray() {
            return projectListArray;
        },
        getProjectTitles() {
            let projectList = [];
            for (const project of projectListArray) {
                projectList.push(project.getTitle());
            }
            return projectList;
        }
    };
}