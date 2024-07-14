export default function addTask(){
    const input  = document.getElementById('new-task-input');
    const list_element = document.getElementById('tasks');
   
    

        const task = input.value;
        if (!task){
            alert ('Please fill out the task');
            return;
        } 

        const task_element =  document.createElement('div');
        task_element.classList.add('task');

        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');


        task_element.appendChild(task_content_element);

        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly', 'readonly');

        task_content_element.appendChild(task_input_element);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('action')

        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerHTML='Edit';

        const task_delete_element = document.createElement('button')
        task_delete_element.classList.add('delete');
        task_delete_element.innerHTML='Delete';

        task_actions_el.appendChild(task_edit_element);
        task_actions_el.appendChild(task_delete_element);

        task_element.appendChild(task_actions_el);

        list_element.appendChild(task_element);

       

        input.value='';
    
}