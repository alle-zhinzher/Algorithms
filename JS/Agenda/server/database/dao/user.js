const User = require('../models/User');
const bcActions= require('../../routs/utils/bcrytptActions');

const registerUser = (username, email, password) => {
    const hashedPassword = bcActions.genPassword(password);
    return new User({ username, email, password: hashedPassword }).save();
}

const getUserByID = (id) => User.findById(id).select('-password');

const getUserByEmail = (email) => User.findOne({ email });

const getAllUsers = () => User.find();

const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
    registerUser,
    getUserByID,
    getUserByEmail,
    deleteUser,
    getAllUsers,
}