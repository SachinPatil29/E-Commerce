const validateMongodbId = require('../Utils/validateMongodbId');
const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Creating User - Register/SignUp
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        //Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else {
        throw new Error('User already exists')
    }
});


// Login control of the user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check if user is exists or not
    const findUser = await User.findOne({ email: email });
    if (findUser && (await findUser.isPasswordMatched(password))) {  //Call isPassswordMatched function for comparing password with encrypted password in userModel
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    }
    else {
        throw new Error('Bad Credential');
    }
})

//Update a User
const updateaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
            {
                new: true
            }
        )
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
})

//Get all Users
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch (error) {
        throw new Error(error)
    }
})

//Get a single user 
const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getaUser = await User.findById(id);
        res.json({ getaUser })
    }
    catch (error) {
        throw new Error(error);
    }
})

//Delete a single user 
const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({ deleteaUser })
    }
    catch (error) {
        throw new Error(error);
    }
})

const blockUser = asyncHandler( async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const blockUser = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },
        {
            new: true,
        }
    );
    res.json(blockUser);
    } catch (error) {
        throw new Error(error);
    }
});
const unblockUser = asyncHandler( async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const unblock = await User.findByIdAndUpdate(id, {
            isBlocked: false,
        },
        {
            new: true,
        }
    );
    res.json({
        message: "User is Unblocked"
    });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { 
    createUser, 
    loginUser, 
    getAllUser, 
    getaUser, 
    deleteaUser, 
    updateaUser,
    blockUser,
    unblockUser 
}