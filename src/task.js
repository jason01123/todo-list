 export function createTask() {
    let title = "";
    let description = "";
    let dueDate = "";
    let priority = "";
    return {
        getTitle() {
            return title;
        },
        setTitle(newTitle) {
            title = newTitle;
        },
        getDescription() {
            return description;
        },
        setDescription(newDescription) {
            description = newDescription;
        },
        getDueDate() {
            return dueDate;
        },
        setDueDate(newDueDate) {
            dueDate = newDueDate;
        },
        getPriority() {
            return priority;
        },
        setPriority(newPriority) {
            priority = newPriority;
        }
    };
}