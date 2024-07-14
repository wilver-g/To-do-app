export default function deleteTask(deleteButton) {
    // Assuming the delete button is within the task element, find the task element
    const taskElement = deleteButton.closest('.task');

    if (taskElement) {
        // Remove the task element from the DOM
        taskElement.remove();
        console.log('Task deleted successfully');
    } else {
        console.error('Task element not found');
    }

   
}