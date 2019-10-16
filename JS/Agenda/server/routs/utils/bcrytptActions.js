const bcrypt = require('bcryptjs');

const genPassword = (password) => bcrypt.hashSync(password, 8);

const comparePasswords = (passedPassword, realPassword) => bcrypt.compareSync(bcrypt.hashSync(passedPassword, 8), realPassword);

module.exports = {
    genPassword,
    comparePasswords,
}