const alertMessage = document.getElementById('alertMessage');
let toDoForm = document.getElementById('toDoForm');
toDoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    const toDoInput = document.getElementById('toDoInput')
    event.preventDefault()
    addToDoList(toDoInput.value)
    toDoInput.value = "";
    console.log(toDoInput.value);

}

let toDoList = document.getElementById('toDoList');
const toDoArray = [];
let index = 0;
const addToDoList = (toDoInput) => {
    if (toDoInput) {
        let li = document.createElement('li');
        li.classList.add("list-group-item", "list-group-item-success")
        li.id = index;
        index++;

        li.innerHTML = toDoInput
        let button = document.createElement("button");
        button.classList.add("badge", "bg-primary", "rounded-pill");
        button.style.float = "right";
        button.innerHTML = 'x';
        button.onclick = () => {
            //find toDo item index to delete
            const toDoDeleteIndex = toDoArray.findIndex(toDo => toDo.id === li.id);
            if (toDoDeleteIndex > -1) {
                //delete item by index
                toDoArray.splice(toDoDeleteIndex, 1);
                renderHTML();
            }

        }
        li.append(button);
        li.onclick = () => {
            // find to Do item to change style
            const foundLi = toDoArray.find(toDo => toDo.id === li.id);
            if (foundLi) {
                foundLi.classList = "list-group-item list-group-item-danger";
                foundLi.style.textDecoration = 'line-through';
            }

        }
        toDoArray.push(li);
        renderHTML();
        alertMessage.innerHTML = ''
    } else {

        alertMessage.innerHTML = getMessage("Please enter your valid to do", 'danger');

    }

}

const renderHTML = () => {
    toDoList.innerHTML = "";
    toDoArray.forEach(toDo => toDoList.append(toDo));
}

const getMessage = (message, type) => `
<div class="alert alert-${type}" role="alert">
 ${message}
</div>
`