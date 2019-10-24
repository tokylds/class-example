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

newNameElement.addEventListener('keypress', function(e) {
    if(e.keyCode ===13) {
            AddName();
        }
    });