let form = document.querySelector('form');
let input = document.querySelector('#task-input')
let span = document.querySelector('#message')
let taskList = document.querySelector('#task-list')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskName = input.value;
    if (taskName === "") {
        DisplayMessage("Vous devez renseigner au moins une lettre", "error");
        return;
    }
    for (const task of document.querySelectorAll('.taskname')) {
        if (task.textContent === taskName.trim()) {
            DisplayMessage("Cette tâche existe deja", "error");
            return;
        }
    }
    AddTask(taskName);
})

function AddTask(input) {
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    checkbox.addEventListener('change',function(){
        
        checkbox.parentNode.classList.toggle('done');
    })

    let p = document.createElement('p');
    p.classList.add('taskname');
    p.textContent = input.trim();
    li.appendChild(p)

    let removeButton = document.createElement('button');
    removeButton.textContent = "Supprimer";
    li.appendChild(removeButton);
    removeButton.addEventListener('click',function(){
        removeButton.parentNode.remove();
    })

    taskList.appendChild(li);
    DisplayMessage("Tache ajoutée","success");
}

function DisplayMessage(message, type) {
    span.textContent = message;
    if (type === "error") {
        span.style.color = "red";
        input.classList.add('wrong');
    } else {
        span.style.color = "green"
    }
}