const express = require('express');
const auth = require('../middleware/auth');
const genToken = require('../utils/genJWT');
const users = require('../../database/dao/user');
const bcActions = require('../../routs/utils/bcrytptActions');

const router = express.Router();

// @route   POST api/auth
// @desc    Login User
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;
    users.getUserByEmail(email)
        .then(user => {
            if(!user) {res.status(404).send({ msg: "User not found" })}
            const passwordIsValid = bcActions.comparePasswords(password, user.password)
            passwordIsValid ?
                res.status(401).send({ msg: "Password does not match" })
                :
                res.status(200).send({ token: genToken(user._id), user });
        })
});

// @route   GET api/auth/user
// @desc    Get user data by Token
// @access  Private
router.get('/user', auth, (req, res) => {
    const { id } = req.user
    users.getUserByID(id)
        .then(user => res.json(user));
});

module.exports = router;
