document.addEventListener('DOMContentLoaded', ()=> {
    // Variables

    const addTask = document.getElementById('add-task');
    const newTask = document.getElementById('new-task');
    const taskContainer = document.getElementById('task-container');

    function addNewTask() {
        
        let task = document.createElement('div');
        task.classList.add('task');

        let li = document.createElement('li');
        li.innerText = newTask.value;
        task.appendChild(li);

        let completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="bi bi-check-lg"></i>';
        completeButton.classList.add('completeTask');
        task.appendChild(completeButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
        deleteButton.classList.add('deleteTask');
        task.appendChild(deleteButton);

        if(newTask.value === ''){
            alert('Please Add A Task');
            return
            // li.remove();
        }else{
            taskContainer.appendChild(task);
        }
        
        newTask.value = '';

        completeButton.addEventListener('click', function() {
            completeButton.parentElement.style.textDecoration = 'line-through';
        });

        // deleteButton.addEventListener('click', function(e) {
        //     let target = e.target;
        //     target.parentElement.classList.add('test');
        // });

        deleteButton.addEventListener('click', function() {
            deleteButton.parentElement.remove();
        })
    };

    addTask.addEventListener('click', function() {
        addNewTask();
    })

    newTask.addEventListener("keypress", (event) => {
        console.log({event});
        if(event.key === 'Enter'){
            addNewTask();
        }
    })
});