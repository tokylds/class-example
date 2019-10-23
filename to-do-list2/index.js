const listElement = document.getElementById('list');
const inputBoxElement = document.getElementById('inputBox');
const addButtonElement = document.getElementById('addButton');
 
addButtonElement.addEventListener('click', function() {
    AddToDoItem();
});
 
inputBoxElement.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        AddToDoItem();
    }
});
 
function AddToDoItem() {
    const item = inputBoxElement.value;
 
    if(item !== ''){
        const newListItemElement = document.createElement('li');
        newListItemElement.textContent = item;
        newListItemElement.classList.add('list-element');
 
        newListItemElement.addEventListener('click', function() {
            newListItemElement.remove();
        });
    
        listElement.append(newListItemElement);
        inputBoxElement.value = '';
    }  
}