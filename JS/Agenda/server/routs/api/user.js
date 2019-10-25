const express = require('express');
const auth = require('../middleware/auth');
const genToken = require('../utils/genJWT');
const users = require('../../database/dao/user');

const router = express.Router();

// @route   POST api/users
// @desc    Register a new User
// @access  Public
router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    users.getUserByEmail(email)
        .then(user => {
            user ?
                res.status(403).send({ msg: "User with this email already exists" })
                :
                users.registerUser(username, email, password)
                    .then(user => {
                        res.status(200).send({ auth: true, token: genToken(user._id), user });
                    });
        })
});

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    users.getAllUsers()
        .then(users => res.json(users));
});

// @route   DELETE api/users/:id
// @desc    Delete a User
// @access  Public
router.delete('/:id', auth, (req, res) => {
    const { id } = req.params;
    users.deleteUser(id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
