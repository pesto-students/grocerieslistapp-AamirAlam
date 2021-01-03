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

const max_bucket_items = 5;
let current_bucket_items = 0;
let grocery_items = [];

function addGrocry(event){

    event.preventDefault();
    
    const validation_res = validateGroceryInput(groceryInput.value);

    if (!validation_res.status){
        return alert(validation_res.message)
    }

    const grocery_item = {
        id: Date.now(),
        name: groceryInput.value
    }

    groceryList.appendChild(generateGroceryListElement(grocery_item.id, grocery_item.name))
    
    grocery_items.push(grocery_item)
    console.log('adding new item', grocery_items)

    //clear grocery input value
    groceryInput.value = ""

}

function validateGroceryInput(name, action='add') {
    console.log(grocery_items.map(item => item.name).indexOf(name))
    if (!name) {
        return {status: false, message: "Invalid grocery name"}
    }
    else if (action === 'add' && grocery_items.length  >= max_bucket_items){
       return  {status: false, message: "Shopping bucket full! \nOnly a max of 5 items can be added"};
    }
    else if (grocery_items.map(item => item.name).indexOf(name) >= 0){
        return {status: false, message: "Item already present in the bucket!"};
    }else{
        return {status: true, message: ""};
    }
}

function generateGroceryListElement(id, value) {
    const groceryDiv = document.createElement('div');
    groceryDiv.setAttribute('class', 'grocery');
    groceryDiv.setAttribute('data-key', id)

    const newgrocery = document.createElement('li');
    newgrocery.innerText = value;
    newgrocery.setAttribute('class', 'grocery_item');
    
   

    groceryDiv.appendChild(newgrocery);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit edit-button" ></i>';
    editButton.addEventListener('click', editItem)
    groceryDiv.appendChild(editButton)


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash delete-button" ></i>';
    deleteButton.addEventListener('click', deleteItem)
    groceryDiv.appendChild(deleteButton)
    return groceryDiv;
}

function generateEditListItem(id, name) {
    const editGroceryDiv = document.createElement('div');
    editGroceryDiv.setAttribute('class', 'grocery');
    editGroceryDiv.setAttribute('data-key', id)

    const newGrocery = document.createElement('input');
    newGrocery.value =  name;
    newGrocery.classList.add('edit-input')
    editGroceryDiv.appendChild(newGrocery);


    const saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-check save-button" ></i>';
    saveBtn.addEventListener('click', saveEditedItem)
    editGroceryDiv.appendChild(saveBtn)

    return editGroceryDiv;
}

function editItem(event) {
    const item = event.target;

    const item_id = item.parentElement.getAttribute('data-key');
    const name = item.parentElement.innerText;

    const editableItem = generateEditListItem(item_id, name);
    item.parentElement.replaceWith(editableItem)
    
}

function saveEditedItem(event) {
    const item = event.target;

    const item_id = item.parentElement.parentElement.getAttribute('data-key');
    const name = item.parentElement.parentElement.querySelector('input').value;

    const validation_res = validateGroceryInput(name, 'edit');

    if (!validation_res.status){
        return alert(validation_res.message)
    }

    const updatedItemDiv = generateGroceryListElement(item_id, name);

    item.parentElement.parentElement.replaceWith(updatedItemDiv)

}

function deleteItem(event){
    console.log('delete item')
    const item = event.target;

    const item_id = item.parentElement.getAttribute('data-key');
    console.log(item_id)
    grocery_items = grocery_items.filter(item => item.id != item_id)
    console.log(grocery_items)
    const grocery = item.parentElement;
    grocery.classList.add("fall")
    grocery.remove()
}

