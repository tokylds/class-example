const newNameElement = document.getElementById ('newName');
const addNewNameElement = document.getElementById ('addNewNameButton');
const nameElement = document.getElementById ('name')

addNewNameElement.addEventListener('click',function(){
    AddName()
})

function AddName(){
    const name = newNameElement.value;
    nameElement.textContent = name;
}

