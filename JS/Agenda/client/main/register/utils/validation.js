import { errorWindow } from '../../warnigs/errorWindow';

export const validatePassword = (pas1, pas2) => {
    if (pas1.length < 8) {
        errorWindow("Password length must be more then 8 characters", 'form-register');
        return false;
    };
    if (pas1 !== pas2) {
        errorWindow("Password Did not much", 'form-register')
        return false;
    };

    return true;
}