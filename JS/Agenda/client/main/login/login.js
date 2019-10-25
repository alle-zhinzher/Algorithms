import { errorWindow } from '../warnigs/errorWindow';
import { successWindow } from '../warnigs/successWindow';
import { loginUser } from '../actions/user';
import { loadUser } from '../actions/loadUser';

if (window.location.href === "http://localhost:5000/login") {
    loadUser()
        .then(window.location.href = "http://localhost:5000/")
        .catch(err => {
            const loginForm = document.getElementById('form-login');
            loginForm.onsubmit = (event) => {
                event.preventDefault();
                const { email, password } = event.target
                loginUser(email.value, password.value)
                    .then(user => {
                        localStorage.setItem('token', user.token);
                        successWindow("Welcome!", 'form-login');
                        setTimeout(window.location.href = "http://localhost:5000/", 3100)
                    })
                    .catch(err => {
                        errorWindow("Incorrect credentional", 'form-login')
                    })
            }
        })
}
