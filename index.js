
import addTask from './addTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import saveEdit from './saveEdit.js';

window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      deleteTask(e.target);
    }
    else if (e.target.classList.contains("edit")) {
      editTask(e.target);
    }

    else if(e.target.classList.contains('save')) {
        saveEdit(e.target);
      }
    
  });

  
});
