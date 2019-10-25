import { errorWindow } from '../warnigs/errorWindow';
import { successWindow } from '../warnigs/successWindow';
import { validatePassword } from './utils/validation';
import { registerUser } from '../actions/user';
import { loadUser } from '../actions/loadUser';

if (window.location.href === "http://localhost:5000/register") {
    loadUser()
        .then(window.location.href = "http://localhost:5000/")
        .catch(err => {
            const regiserForm = document.getElementById('form-register');
            regiserForm.onsubmit = (event) => {
                event.preventDefault();
                const { username, email, password1, password2 } = event.target
                const passwordIsValid = validatePassword(password1.value, password2.value)
                if (passwordIsValid) {
                    registerUser(username.value, email.value, password1.value)
                        .then(user => {
                            localStorage.setItem('token', user.token);
                            successWindow("User succesfully registred", 'form-register')
                            setTimeout(window.location.href = "http://localhost:5000/", 3100)
                        })
                        .catch(err => {
                            errorWindow("User with this email already exists", 'form-register')
                        })
                }
            }
        })
}
