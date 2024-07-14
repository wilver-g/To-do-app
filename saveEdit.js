
export default function saveEdit(saveButton){

    const taskElement = saveButton.closest('.task')
    if(!taskElement) {
        console.error('task container not found');
        return;
    }

    const inputElement = taskElement.querySelector('.text');
    if (!inputElement) {
        console.error('Input element with class "text" not found');
        return;
    }

    inputElement.setAttribute('readonly',true);
    saveButton.textContent = 'Edit';
    saveButton.classList.remove('save');
    saveButton.classList.add('edit');

    const tasks = loadFromLocalStorage();
    const taskText = inputElement.value;

    
}