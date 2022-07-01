const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Register new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('user already exists')
    }


    res.json({message: 'register user'})
})

//@desc authenticate a user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler( async (req, res) => {
    res.json({message: 'login user'})
})

//@desc get user data
//@route GET /api/users/me
//@access Public

const getMe = asyncHandler( async (req, res) => {
    res.json({message: 'user data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}