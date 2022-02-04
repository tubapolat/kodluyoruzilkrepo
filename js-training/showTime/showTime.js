//Dom manuplation
let nameEntered = prompt('Please enter your name');
document.getElementById("name").innerHTML = nameEntered;

//Show time onload
function showTime() {

    document.getElementById('time').innerHTML = new Date();
}