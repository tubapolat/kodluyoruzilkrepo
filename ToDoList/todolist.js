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
        li.innerHTML = `${toDoInput}`
        let span = document.createElement("button");
        span.classList.add("badge", "bg-primary", "rounded-pill");
        span.style.float = "right";
        span.innerHTML = 'x';
        span.onclick = () => {
            toDoArray.splice(li.id, 1);
            renderHTML();
        }
        li.append(span);
        li.onclick = () => {
            const foundLi = toDoArray.find(toDo => toDo.id === li.id);
            if (foundLi) {
                foundLi.classList = "list-group-item list-group-item-danger";
                foundLi.style.textDecoration = 'line-through';
            }

        }
        index++;
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