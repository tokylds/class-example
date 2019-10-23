listElement = document.querySelector ('#List')
inputBoxElement = document.querySelector ('#inputBox')
addButtonElement = document.querySelector ('#addButton')

const listElement = document.getElementById ('list')
const inputBoxElement = document.getElementById ('inputBox')
const addButtonElement = document.getElementById ('addButton')

addButtonElement.addEventListener ('click', function(){
    AddToDoItem();
});

inputBoxElement.addEventListener ('keypress', function (e){
    if (e.keyCode === 13) {
        AddToDoItem();
    }
})

function AddToDoItem ({
    const item = inputBoxElement.value;

    if (item !== ""){
        const NewListItemElement = document.createElement ('li');
        newListItemElement.textContent = item;
        newListItemElement.classList.add ('list-element');

        newListItemElement.addEventListener ('click', function ( {
            newListItemElement.remove();
        });

        listElement.append (newListItemelement);
        inputBoxElement.value =";"

    }

}
