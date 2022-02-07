const alertMessage = document.getElementById('alertMessage');
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

const USER_NAME = 'admin';
const PASSWORD = 'P@ssw0rd';

const getMessage = (message, type) => `
<div class="alert alert-${type}" role="alert">
 ${message}
</div>
`

form.addEventListener('submit', loginHandler)

function loginHandler(event) {
    event.preventDefault();

    if (username.value === USER_NAME && password.value === PASSWORD) {
        alertMessage.innerHTML = getMessage('Success', 'success');

    } else {
        alertMessage.innerHTML = getMessage('Invalid Username or Password', 'danger');

    }


}