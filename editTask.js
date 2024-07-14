


export default function editTask(editButton) {
  const taskElement = editButton.closest('.task')
  if(!taskElement) {
    console.error('Task container not found');
    return;
  }

  const inputElement = taskElement.querySelector('.text');
  if (!inputElement) {
    console.error('Input element with class "text" not found');
    return;
  }

  inputElement.removeAttribute('readonly')
  
  editButton.textContent = 'Save';
  editButton.classList.remove('edit');
  editButton.classList.add('save')

  
  
}






