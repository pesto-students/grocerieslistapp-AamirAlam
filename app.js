// selectors

const groceryInput = document.querySelector('.grocery-input');
const groceryAddButton = document.querySelector('.add-grocery-button');
const groceryList = document.querySelector('.grocery-list');

// event listners

groceryAddButton.addEventListener('click', addGrocry )

groceryList.addEventListener('click', deleteCheck);

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
    editButton.innerHTML = '<i class="fas fa-edit" ></i>';
    editButton.classList.add('edit-button')
    groceryDiv.appendChild(editButton)


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add('delete-button')
    groceryDiv.appendChild(deleteButton)

    groceryList.appendChild(groceryDiv)
    console.log('adding new item')

    //clear grocery input value
    groceryInput.value = ""

}

function deleteCheck(e) {

    const item = e.target;
    console.log(e)

    if (item.classList[0] == "delete-button") {
        const grocery = item.parentElement;
        grocery.classList.add("fall")
        grocery.remove()
    }else if (item.classList[0] == "edit-button") {
        const groceryDiv = document.createElement('div');
        groceryDiv.classList.add('grocery');
    
        const newGrocery = document.createElement('input');
        newGrocery.value =  item.value;
        newGrocery.classList.add('edit-input')
    
        groceryDiv.appendChild(newGrocery);
    
    
        const saveBtn = document.createElement('button');
        saveBtn.innerHTML = '<i class="fas fa-check" ></i>';
        saveBtn.classList.add('delete-button')
        groceryDiv.appendChild(saveBtn)
        
        item.parentElement.replaceWith(groceryDiv)
    }else if(item.classList[0] == "save-button"){
        const groceryDiv = document.createElement('div');
        groceryDiv.classList.add('grocery');
    
        const newGrocery = document.createElement('li');
        newGrocery.innerText = groceryInput.value;
        newGrocery.classList.add('grocery-item')
    
        groceryDiv.appendChild(newGrocery);
    
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit" ></i>';
        editButton.classList.add('edit-button')
        groceryDiv.appendChild(editButton)
    
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
        deleteButton.classList.add('save-button')
        groceryDiv.appendChild(deleteButton)
        
        item.parentElement.replaceWith(groceryDiv)

        console.log('save edited item')
    }

}

