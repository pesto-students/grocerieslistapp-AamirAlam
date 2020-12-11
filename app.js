// selectors

const todoInput = document.querySelector('.todo-input');
const todoAddButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listners

todoAddButton.addEventListener('click', addGrocry )

todoList.addEventListener('click', deleteCheck);

// functions

function addGrocry(event){

    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit" ></i>';
    editButton.classList.add('edit-button')
    todoDiv.appendChild(editButton)


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton)

    todoList.appendChild(todoDiv)
    console.log('adding new item')

    //clear todo input value
    todoInput.value = ""

}

function deleteCheck(e) {

    const item = e.target;

    if (item.classList[0] == "delete-button") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.remove()
    }else if (item.classList[0] == "edit-button") {
        
    }

}

