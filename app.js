// selectors
const groceryInput = document.querySelector('.grocery-input');
groceryInput.focus()

const groceryAddButton = document.querySelector('.add-grocery-button');
const groceryList = document.querySelector('.grocery-list');

const editButton = document.querySelector('.edit-button')
const deleteButton = document.querySelector('.delete-button')
const saveButton = document.querySelector('.save-button')

const groceryEditInput = document.querySelector('.edit-input');
// event listners

groceryAddButton.addEventListener('click', addGrocry )

// functions

function addGrocry(event){

    event.preventDefault();
    
    if (!groceryInput.value) {
        return
    }

    const groceryDiv = document.createElement('div');
    groceryDiv.classList.add('grocery');

    const newgrocery = document.createElement('li');
    newgrocery.innerText = groceryInput.value;
    newgrocery.classList.add('grocery-item')

    groceryDiv.appendChild(newgrocery);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit edit-button" ></i>';
    editButton.addEventListener('click', editItem)
    groceryDiv.appendChild(editButton)


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash delete-button" ></i>';
    deleteButton.addEventListener('click', deleteItem)
    groceryDiv.appendChild(deleteButton)

    groceryList.appendChild(groceryDiv)
    console.log('adding new item')

    //clear grocery input value
    groceryInput.value = ""

}

function editItem(event) {
    const item = event.target;
    console.log(item)
    const groceryDiv = document.createElement('div');
    groceryDiv.classList.add('grocery');

    const newGrocery = document.createElement('input');
    newGrocery.value =  item.parentElement.innerText;
    newGrocery.classList.add('edit-input')
    newGrocery.focus()
    groceryDiv.appendChild(newGrocery);


    const saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-check save-button" ></i>';
    groceryDiv.appendChild(saveBtn)

    saveBtn.addEventListener('click', function() {


        const groceryLi = document.createElement('li');
        groceryLi.innerText =newGrocery.value;
        groceryLi.classList.add('grocery-item')

        // groceryDiv.parentElement.removeChild(groceryDiv);

        const EditedgroceryDiv = document.createElement('div');
        EditedgroceryDiv.classList.add('grocery');

        EditedgroceryDiv.appendChild(groceryLi);

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit edit-button" ></i>';
        editButton.addEventListener('click', editItem)
        EditedgroceryDiv.appendChild(editButton)
    
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash delete-button" ></i>';
        deleteButton.addEventListener('click', deleteItem)
        EditedgroceryDiv.appendChild(deleteButton)

        groceryDiv.replaceWith(EditedgroceryDiv)
    } )
    
    item.parentElement.replaceWith(groceryDiv)
}

function deleteItem(event){
    console.log('delete item')
    const item = event.target;
    console.log(item.id)
    const grocery = item.parentElement;
    grocery.classList.add("fall")
    grocery.remove()
}

